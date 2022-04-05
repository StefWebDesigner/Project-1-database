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


//user

        //update user setting
        //post content into their personal group of code
        //methods to share user




//admin

    //to get all user
    //to creat content in the tips section
    //be able to take postID and send it over to a genre
    //create genres with an icon


//category

//create tips through an input field & post it into a certain section
//





app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
});