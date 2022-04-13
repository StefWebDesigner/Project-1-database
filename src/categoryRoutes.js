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
});


<<<<<<< HEAD
//TO POST A CATEGORY

//????
=======
// http://localhost:4000/categories/newtips
>>>>>>> 5d5e1108dcbcaff855416ee0c0742930517acbab
app.post('/newtips', (req, res) => {

    let { tiptitle, tipbody, tipgenre } = req.body;

    db.query('INSERT INTO tips (tiptitle, tipbody, tipgenre) VALUES ($1, $2, $3) RETURNING tipid',
        [tiptitle, tipbody, tipgenre], (error, results) => {

            if (error) {
                throw error;
            }

            let id = results.rows[0].tipid;

            res.status(200).send(`tip content added with ID: ${tipid}`);
        }
    );
});
// get reports
// http://localhost:4000/categories/retrieveReport/caseid
app.get("/retrieveReport/:caseid", (req, res) => {
    const caseid = req.params.caseid;

    db.query('SELECT * FROM report WHERE caseid=$1', [caseid], (error, results) => {
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
});


// http://localhost:4000/categories/makereport
app.post('/makereport', (req, res) => {
    let { username, issue } = req.body;

    db.query('INSERT INTO report (username, issue) VAlUES ($1, $2) RETURNING caseid', [username, issue], (error, results) => {
        if (error) {
            throw error;
        }
            let id = results.rows[0].caseid;

            res.status(200).send(` report generated added with ID: ${caseid}`);
        }
    );
});


<<<<<<< HEAD
=======
app.delete('/deleteCategory/:id', (req, res) => {

    let caseid = req.params.caseid;
    db.query("DELETE FROM report WHERE caseid=$1", [caseid], (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).send(`Report with caseid: ${caseid} is removed from reports list.`);

    });
})

//http://localhost:4000/categories/updateCategory/id
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
// needs to be corrected
        db.query("UPDATE category SET title=$1, mainbodycontent=$2, genreCategory=$3 WHERE id=$4",
            [category.title, category.mainbodycontent, category.genreCategory, post.likes, post.postid], (error, results) => {
                if (error) {
                    throw error;
                }
                res.status(200).send(`Update successful for post with postid: ${postid}`);
            });
    })
})

// to delete a category
//http://localhost:4000/categories/deleteCategory/id
app.delete('/deleteCategory/:id', (req, res) => {

    let id = req.params.id;
    db.query("DELETE FROM category WHERE id=$1", [id], (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).send(`Category with id: ${id} is succesfully deleted.`);

    });
})




>>>>>>> 5d5e1108dcbcaff855416ee0c0742930517acbab
module.exports = app;