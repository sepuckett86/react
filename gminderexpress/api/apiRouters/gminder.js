const express = require('express');
const gminderRouter = express.Router();

const sqlite3 = require('sqlite3');
const db = new sqlite3.Database(process.env.TEST_DATABASE || './db.sqlite');

gminderRouter.get('/', (req, res, next) => {
  db.all('SELECT * FROM Gminder', function (error, rows) {
    if (error) {
      res.status(404).send;
    } else {
      res.status(200).send({ express: rows})
    }
  })
})

module.exports = gminderRouter;
