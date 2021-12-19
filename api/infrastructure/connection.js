const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'Melyssinha08@',
    database: 'PIG_DIN'
});

module.exports = connection;