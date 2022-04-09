const express = require('express');
const bodyParser = require('body-parser');
const db = require('./dbconnect'); 
const cors = require('cors');
const axios = require("axios");

const port = 4000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());


// title text,
//       mainbodycontent text,
//       genreCategory varchar(50)


//retrieve a category info by title
// http://localhost:4000/categories/categoryByTitle/title
app.get("/categoryByTitle/:title", (req, res) => {
    const title = req.params.title;

    db.query('SELECT * FROM users WHERE username=$1', [title], (error, results) => {
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


// app.listen(port, ()=>{
//     console.log(`Listening on port ${port}`);
// });
module.exports = app;