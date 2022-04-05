const Pool = require('pg').Pool;
const db = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'project1',
    password: '',
    port: 4000
});

module.exports=db;