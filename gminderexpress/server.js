const express = require('express');
const app = express();

const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./db.sqlite');

app.get('/api/hello', (req, res, next) => {
  db.all('SELECT * FROM Gminder', function (error, rows) {
    if (error) {
      res.status(404).send;
    } else {
      res.status(200).send({ express: rows})
    }
  })
})


const PORT = 4000;
app.listen(PORT, () => console.log(`Server is listening on ${PORT}`));

module.exports = app;
