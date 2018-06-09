//require('./config.js')
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'unconf_db'
});
module.exports = connection;