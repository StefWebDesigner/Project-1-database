const express = require('express');
const bodyParser = require('body-parser');
const db = require('./dbconnect'); //create file called dbconnect.js with your database pool info when ready
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

//user
        //update user setting
        //post content into their personal group of code
        //methods to share user

//admin Attempts
    //to get all user
    //to creat content in the tips section
    //be able to take postID and send it over to a genre
    //create genres with an icon


//category
    //create tips through an input field & post it into a certain section
//


//retrieve single user info from username
// http://localhost:4000/users/userByName/username
app.get("/userByName/:username", (req, res) => {
    const username = req.params.username;

    db.query('SELECT * FROM users WHERE username=$1', [username], (error, results) => {
        if (error) {
            throw error;
        }
        if (results.rowCount > 0) {
            //username found
            res.status(200).json(results.rows[0]);
        } else {
            //no user found
            res.status(200).json(null);
        }
    });
})


//retrieve single user info from username
app.get("/allUsers", (req, res) => {

    db.query('SELECT * FROM users', (error, results) => {
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


//insert new user into database
// http://localhost:4000/users/newUser
app.post('/newUser', (req, res) => {

    //role type -- let them choose their designation on form but get approval from an admin before sending to db?
    let { firstname, lastname, username, password, city, state, email, account } = req.body;

    db.query('INSERT INTO users (firstname, lastname, username, password, city, state, email, account) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING userid',
        [firstname, lastname, username, password, city, state, email, account], (error, results) => {


        if (error) {
            throw error;
        }

        let userid = results.rows[0].userid;
        res.status(200).send({userid});
        }
    );
})

//updates user information based on form data
app.put('/updateUser/:userid', (req, res) => {

    let userid = req.params.userid;

    db.query("SELECT * FROM users WHERE userid=$1", [userid], (error, results) => {
        if (error) {
            throw error;
        }

        let prevInfo = {};

        if (results.rowCount > 0) {
            prevInfo = results.rows[0];
        }

        let user = { ...prevInfo, ...req.body };

        db.query("UPDATE users SET firstname=$1, lastname=$2, username=$3, password=$4, email=$5, city=$6, state=$7 WHERE userid=$8",
            [user.firstname, user.lastname, user.username, user.password, user.email, user.city, user.state, userid], (error, results) => {
            if (error) {
                throw error;
            }
            res.status(200).send(`Update successful for user with id: ${userid}`);
        });
    })
})

// delete user by userId
//http://localhost:4000/users/deleteUser/username
app.delete('/deleteUser/:username', (req, res) => {

    let username = req.params.username;
    
    db.query("DELETE FROM users WHERE username=$1", [username], (error, results) => {
        if (error) {
            throw error;
         }

        res.status(200).send(`${username}`);
    });
})

module.exports = app;