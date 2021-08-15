const mysql = require('mysql');

const data = mysql.createPool({
    connectionLimit:10,
    password : 'zxcvbn',
    user :'jackson',
    database : 'movies',
    host:'localhost',
    port:'3306'
})

 module.exports = data;
