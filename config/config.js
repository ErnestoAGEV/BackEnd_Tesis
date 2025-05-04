const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Ernesto1234',
    database: '2bite_db'
});

db.connect(function(err) {
    if(err) throw err;
    console.log('DATABASE CONECTADA...');
});

module.exports = db;