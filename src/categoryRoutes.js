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

// get all categories
// http://localhost:4000/categories/getAll

app.get('/getAll', (req, res) => {
    db.query('SELECT * FROM category', (error, results) => {
        if (error) {
            throw error
        } else
            res.status(200).json(results);
    })
})

// get category by id
// http://localhost:4000/categories/categoryById/id
app.get("/categoryById/:id", (req, res) => {
    const id = req.params.id;

    db.query('SELECT * FROM category WHERE id=$1', [id], (error, results) => {
        if (error) {
            throw error;
        }
        if (results.rowCount > 0) {
            //id  found
            res.status(200).json(results.rows);
        } else {
            //no category found
            res.status(200).json(null);
        }
    });
})
// add new category
// http://localhost:4000/categories/newCategory
app.post('/newCategory', (req, res) => {

    let {id, title, mainbodycontent, genreCategory } = req.body;

    db.query('INSERT INTO category(id, title, mainbodycontent, genreCategory) VALUES ($1, $2, $3, $4) RETURNING id',
        [id, title, mainbodycontent, genreCategory], (error, results) => {

        if (error) {
            throw error;
        }

        let id = results.rows[0].id;
        res.status(200).send({id});
        }
    );
})

// update Category byId
// http://localhost:4000/categories/updateCategory/id
app.put('/updateCategory/:id', (req, res) => {

    let id = req.params.id;

    db.query("SELECT * FROM category WHERE id=$1", [id], (error, results) => {
        if (error) {
            throw error;
        }

        let prevInfo = {};

        if (results.rowCount > 0) {
            prevInfo = results.rows[0];
        }

        let category = { ...prevInfo, ...req.body };

        db.query("UPDATE category SET title=$1, mainbodycontent=$2, genreCategory=$3, WHERE id=$4"
            [category.title, category.mainbodycontent, category.genreCategory, category.id], (error, results) => {
            if (error) {
                throw error;
            }
            res.status(200).send(`Catagory with id ${id} is successfully updated:`);
        });
    })
})
// delete category
// http://localhost:4000/categories/deleteCategory/id

app.delete('/deleteCategory/:id', (req, res) => {


    let id = req.params.id;
    db.query("DELETE FROM category WHERE id=$1", [id], (error, results) => {
        if (error) {
            throw error;
        }

        res.status(200).send(`Category with id: ${id} is deleted.`);
    });
})

module.exports = app;