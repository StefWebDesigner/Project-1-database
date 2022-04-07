const Pool = require('pg').Pool;
const db = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'project1',
    password: 'Samiboy#12',
    port: 5432
});

module.exports=db;