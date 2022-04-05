const express = require('express');
const bodyParser = require('bodyParser');
const port = 4000;
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());


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