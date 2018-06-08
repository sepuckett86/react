const express = require('express');
const app = express();
const morgan = require('morgan');

const sqlite3 = require('sqlite3');
const db = new sqlite3.Database(process.env.TEST_DATABASE || './db.sqlite');

app.use(morgan('dev'));

app.get('/api/gminder', (req, res, next) => {
  db.all('SELECT * FROM Gminder', function (error, rows) {
    if (error) {
      res.status(404).send;
    } else {
      res.status(200).send({ express: rows})
    }
  })
})

app.get('/api/prompt', (req, res, next) => {
  db.all('SELECT * FROM Prompt', function (error, rows) {
    if (error) {
      res.status(404).send;
    } else {
      res.status(200).send({ express: rows})
    }
  })
})



const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server is listening on ${PORT}`));

module.exports = app;
