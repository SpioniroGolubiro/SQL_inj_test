const express = require('express');
const db = require('./db');
const path = require('path');

const app = express();
const port = 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  console.log(`Ricevuto: ${username} / ${password}`);

  const query = `SELECT * FROM utenti WHERE nome = '${username}' AND password = '${password}'`;

  db.query(query, (err, results) => {
    if (err) {
      console.error('Errore nella query:', err);
      res.status(500).json({ error: 'Errore server' });
      return;
    }

    if (results.length > 0) {
      res.json({ message: 'Login riuscito!', user: results });
    } else {
      res.json({ message: 'Login fallito!' });
    }
  });
});

app.listen(port, () => {
  console.log(`Server avviato su http://localhost:${port}`);
});
