const express = require('express');
const bodyParser = require('body-parser');
const db = require('./dbconnect'); //create file called dbconnect.js with your database pool info when ready
const cors = require('cors');
const axios = require("axios");

const port = 4000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());


// retrieve single post from posts table
app.get("/userByPostid/:postid", (req, res) => {
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


// insert into posts(postid, authorid, posttext, postdate, likes) 

//insert new user into database
app.post('/newPost', (req, res) => {


    let { postid, authorid, posttext, postdate, likes } = req.body;

    db.query('INSERT INTO posts VALUES ($1, $2, $3, $4, $5) RETURNING postid',
        ['default', postid, authorid, posttext, postdate, likes ], (error, results) => {

        if (error) {
            throw error;
        }

        let id = results.rows[0].postid;

        res.status(200).send(`user added with ID: ${id}`);
        }
    );
})

//updates user information based on form data
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
        // insert into posts(postid, authorid, posttext, postdate, likes) 

        db.query("UPDATE users SET firstname=$1, lastname=$2, username=$3, password=$4, email=$5, city=$6, state=$7 WHERE userid=$8",
            [post.postid, post.authorid, post.posttext, post.postdate, post.likes], (error, results) => {
            if (error) {
                throw error;
            }
            res.status(200).send(`Update successful for user with id: ${userid}`);
        });
    })
})

app.delete('/deletePost/:postid', (req, res) => {

    let postid = req.params.postid;


    db.query("DELETE FROM posts WHERE postid=$1", [postid], (error, results) => {
        if (error) {
            throw error;
        }

        db.query("DELETE FROM posts WHERE postid=$1", [postid], (error, results) => {
            if (error) {
                throw error;
            }

            res.status(200).send(`User id: ${postid} deleted.`);
        });
    });
})

app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
});