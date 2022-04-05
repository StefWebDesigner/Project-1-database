const express = require('express');
const bodyParser = require('bodyParser');
const db = require('./dbconnect'); //create file called dbconnect.js with your database pool info when ready
const path = require('path');
const cors = require('cors');

const port = 4000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use(express.static(__dirname));


//home
app.get('/',(req, res)=>{

});

//login
app.route('/login')
    .get((req,res)=>{

    })
    .post((req,res)=>{

    })

//register
app.route('/signup')
    .get((req,res)=>{

    })
    .post((req,res)=>{

    })

//post



app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
});