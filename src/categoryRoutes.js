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

// get all categories
// http://localhost:4000/categories

app.get('/', (req, res) => {
    db.query('SELECT * FROM category', (error, result ) => {
        if (error ) {
        throw error 
    } else 
    res.status(200).json(results);
    })
})


// http://localhost:4000/categories/categoryById/id
app.get("/categoryById/:id", (req, res) => {
    const id = req.params.id;

    db.query('SELECT * FROM category WHERE id=$1', [id], (error, results) => {
        if (error) {
            throw error;
        }
        if (results.rowCount > 0) {
            //id  found
            res.status(200).json(results.rows[0]);
        } else {
            //no category found
            res.status(200).json(null);
        }
    });
})

module.exports = app;