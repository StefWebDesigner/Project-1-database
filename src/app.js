const express = require('express');
const bodyParser = require('bodyParser');
const db = require('./dbconnect'); //create file called dbconnect.js with your database pool info when ready
const cors = require('cors');
const axios = requrie("axios");

const port = 4000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());


//retrieve single user info from username
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

//insert new user into database
app.post('/newUser', (req, res) => {


    //role type -- let them choose their designation on form but get approval from an admin before sending to db?
    let { first, last, username, password, email, city, state, role } = req.body;

    db.query('INSERT INTO users VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING userid',
        ['default', first, last, username, password, email, city, state, role, []], (error, results) => {

        if (error) {
            throw error;
        }

        let id = results.rows[0].userid;

        res.status(200).send(`user added with ID: ${id}`);
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

app.delete('/deleteUser/:userid', (req, res) => {

    let userid = req.params.userid;


    db.query("DELETE FROM users WHERE userid=$1", [userid], (error, results) => {
        if (error) {
            throw error;
        }

        db.query("DELETE FROM users WHERE userid=$1", [userid], (error, results) => {
            if (error) {
                throw error;
            }

            res.status(200).send(`User id: ${userid} deleted.`);
        });
    });
})


//Admin

//CREATE A GENRE
app.post('/genre', (req, res) => {

    console.log(req.body);
    res.status(201).send('Category created');
});


//Create content in the tips section by id
app.post('/category', (req, res) => {
    console.log(req.body);
    res.status(201).send('Category created');
});



//to creat content in the tips section
//be able to take postID and send it over to a genre
//create genres with an icon


//category
//create tips through an input field & post it into a certain section
//





app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
});