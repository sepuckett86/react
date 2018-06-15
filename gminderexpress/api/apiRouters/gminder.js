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

gminderRouter.post('/', (req, res, next) => {
  const sql = 'INSERT INTO Gminder (userID, category, mainResponse, author, promptID, reason, source, who, rating, recordedDate, eventDate, updatedDate, collection, publicFlag) ' +
                          'VALUES ($userID, $category, $mainResponse, $author, $promptID, $reason, $source, $rating, $recordedDate, $eventDate, $updatedDate, $collection, $publicFlag)';
  db.run(sql, {
    $userID: req.body.gminder.userID,
    $category: req.body.gminder.category,
    $mainResponse: req.body.gminder.mainResponse,
    $author: req.body.gminder.author,
    $promptID: req.body.gminder.promptID,
    $reason: req.body.gminder.reason,
    $source: req.body.gminder.source,
    $who: req.body.gminder.who,
    $rating: req.body.gminder.rating,
    $recordedDate: req.body.gminder.recordedDate,
    $eventDate: req.body.gminder.eventDate,
    $updatedDate: req.body.gminder.updatedDate,
    $collection: req.body.gminder.collection,
    $publicFlag: req.body.gminder.publicFlag,
  }, function(error) {
    if (error) {
      res.status(400).send();
    } else {
      const sql2 = 'SELECT * FROM Gminder WHERE Gminder.id = $id';
      db.get(sql2, {
        $id: this.lastID
      }, function(error, row) {
        if (error || !row) {
          res.status(400).send();
        } else {
          res.status(201).send({gminder: row});
        }
      })
    }
  })
})

menusRouter.post('/', (req, res, next) => {
  const sql = 'INSERT INTO Menu (title) VALUES ($title)';
  db.run(sql, {
    $title: req.body.menu.title
  }, function(error) {
    if (error) {
      res.status(400).send();
    } else {
      const sql2 = 'SELECT * FROM Menu WHERE Menu.id = $id';
      db.get(sql2, {
        $id: this.lastID
      }, function(error, row) {
        if (error || !row) {
          res.status(400).send();
        } else {
          res.status(201).send({menu: row});
        }
      })
    }
  })
})

module.exports = gminderRouter;
