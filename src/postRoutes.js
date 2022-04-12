const express = require('express');
const bodyParser = require('body-parser');
const db = require('./dbconnect');
const cors = require('cors');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());


// get all posts

// http://localhost:4000/posts/getAllPosts
app.get("/getAllPosts", (req, res) => {
    db.query('SELECT * FROM posts', (error, results ) => {
        if (error ) {
        throw error 
    }
    if(results.rowCount > 0) {
        res.status(200).json(results.rows);
    } else {
        res.status(200).send(null);
    }
    });
});

//gets all posts with username
//http://localhost:4000/posts/withUserInfo
app.get('/withUserInfo', (req,res)=>{

    db.query('SELECT p.postid, p.posttext, p.postdate, p.likes, u.username FROM posts p LEFT JOIN users u ON p.authorid=u.userid', (error, results) => {
        if (error) {
            throw error
        }
        if (results.rowCount > 0) {
            res.status(200).send(results.rows);
        } else {
            res.status(200).send(null);
        }
    });
});

// retrieve single post from posts table
// http://localhost:4000/posts/PostByid/id
app.get("/PostByid/:postid", (req, res) => {
    const postid = req.params.postid;

    db.query('SELECT * FROM posts WHERE postid=$1', [postid], (error, results) => {
        if (error) {
            throw error;
        }
        if (results.rowCount > 0) {
            //postid found
            res.status(200).json(results.rows[0]);
        } else {
            //no post found
            res.status(200).json(null);
        }
    });
})


//add new post into database
// http://localhost:4000/posts/newPost
app.post('/newPost', (req, res) => {


    let { authorid, posttext } = req.body;

    db.query('INSERT INTO posts (authorid, posttext, postdate, likes) VALUES ($1, $2, now(), 0) RETURNING postid',
        [authorid, posttext], (error, results) => {

            if (error) {
                throw error;
            }

            let id = results.rows[0].postid;

            db.query('UPDATE users SET post= array_append(post, $1) WHERE userid=$2', [id, authorid], (error, results) => {
                res.status(200).end();
            });
        });
})


//updates post information based on form data
// http://localhost:4000/posts/updatePost/postid
//updates post content
app.put('/updatePost/:postid', (req, res) => {

    let postid = req.params.postid;

    db.query("UPDATE posts SET posttext=$1 WHERE postid=$2",
        [req.posttext, postid], (error, results) => {
            if (error) {
                throw error;
            }
            res.status(200).end();
        });
})

//delete a post and remove reference from users
// http://localhost:4000/posts/deletePost/id
//delete a post and remove reference from users
app.delete('/deletePost/:postid', (req, res) => {

    let postid = req.params.postid;


    //delete post from post table
    db.query("DELETE FROM posts WHERE postid=$1 RETURNING authorid", [postid], (error, results) => {
        if (error) {
            throw error;
        }

        let userid = results.rows[0].authorid;

        //get post array for user
        db.query("SELECT post FROM users WHERE userid=$1", [userid], (error, results) => {

            if (error) {
                throw error;
            }

            let posts = results.rows[0].post;
            let index = -1;

            //find index of post in post array
            for (let i = 0; i < posts.length; i++) {
                if (posts[i] == postid) {
                    index = i;
                }
            }

            //remove post from post list
            if (index > -1) {
                posts.splice(index, 1);

                //update post list for user so deleted post is not referenced
                db.query("UPDATE users SET post=$1 WHERE userid=$2", [posts, userid], (error, results) => {
                    if (error) {
                        throw error;
                    }
                    res.status(200).end();
                });
            } else {
                res.status(200);
            }
        });
    });
})

//chat initiate
app.post('/initchat', (req, res) => {
    console.log(req.body);

    const { userId1, userId2 } = req.body;

    console.log(userId1, userId2);

    //Compare the ids to the one in the table
    db.query("SELECT  * FROM chat where (userid1 = $userid2 and userid2 = $userid1) or (userid2 = $userid2 and userid1 = $userid1)", [userid1, userid2], (error, results) => {
        if (error) {
            throw error;
        }

        res.send("Chat initiated");
    });

});

module.exports = app;