const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'crossover.proxy.rlwy.net',
  port: 45538,
  user: 'root',
  password: 'GjsAfXxfsJfKhoPBmVBgiffRrUSgLOly',
  database: 'railway'
});

connection.connect((err) => {
  if (err) {
    console.error('Errore connessione al database:', err);
    return;
  }
  console.log('Connesso al database MySQL su Railway!');
});

module.exports = connection;
