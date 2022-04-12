const express = require('express');
const bodyParser = require('body-parser');
const db = require('./dbconnect');
const cors = require('cors');
const axios = require("axios");

const port = 4000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());


// get all posts
// http://localhost:4000/posts/getAllPosts
app.get("/getAllPosts", (req, res) => {

    db.query('SELECT * FROM posts', (error, results) => {
        if (error) {
            throw error;
        }
        if (results.rowCount > 0) {
            res.status(200).json(results.rows);
        } else {
            //no users found
            res.status(200).json(null);
        }
    });
})
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

    db.query('INSERT INTO posts VALUES ($1, $2, $3, $4, $5) RETURNING postid',
        [postid, authorid, posttext, postdate, likes], (error, results) => {

            if (error) {
                throw error;
            }

            let id = results.rows[0].postid;

            res.status(200).send(`user added with ID: ${id}`);
        }
    );
})

//updates user information based on form data
// http://localhost:4000/posts/updatePost/postid
app.put('/updatePost/:postid', (req, res) => {

    let postid = req.params.postid;

    db.query("SELECT * FROM posts WHERE postid=$1", [postid], (error, results) => {
        if (error) {
            throw error;
        }

        let prevInfo = {};

        if (results.rowCount > 0) {
            prevInfo = results.rows[0];
        }

        let post = { ...prevInfo, ...req.body };

        db.query("UPDATE posts SET authorid=$1, posttext=$2, postdate=$3, likes=$4 WHERE postid=$5",
            [post.authorid, post.posttext, post.postdate, post.likes, post.postid], (error, results) => {
                if (error) {
                    throw error;
                }
                res.status(200).send(`Update successful for post with postid: ${postid}`);
            });
    })
})

// http://localhost:4000/posts/deletePost/id
app.delete('/deletePost/:postid', (req, res) => {

    let postid = req.params.postid;


    db.query("DELETE FROM posts WHERE postid=$1", [postid], (error, results) => {
        if (error) {
            throw error;
        }


        res.status(200).send(`Post with post id: ${postid} deleted.`);

    });
})


module.exports = app;