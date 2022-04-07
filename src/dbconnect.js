const Pool = require('pg').Pool;
const db = new Pool({
    user: 'postgres',
    host: 'localhost',

    password: 'admin',
    database: 'postgres',

    port: 5432
});

module.exports=db;

