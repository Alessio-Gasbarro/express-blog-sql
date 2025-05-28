//Import MySQL2
const mysql = require('mysql2');

//Variabile connessione database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db_blog'
});

//Utilizzo Variabile per instaurare connessione
connection.connect((err) => {
    if (err) {
        console.log(err)
    } else {
        console.log('Qualquadra non cosa!')
    }
})

module.exports = connection;