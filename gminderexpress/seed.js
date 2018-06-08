const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./db.sqlite');
db.serialize(() => {
  db.run(`INSERT INTO Gminder (userID, category, mainResponse, author, promptID, reason, source, who, rating, recordedDate, eventDate, updatedDate, collection, publicFlag)
          VALUES ($userID, $category, $mainResponse, $author, $promptID, $reason, $source, $who, $rating, $recordedDate, $eventDate, $updatedDate, $collection, $publicFlag)`,
          {
            $userID: 1,
            $category: 'prompt',
            $mainResponse: 'Legend of Kyrandia Emerald Room Song by Frank Klepacki',
            $author: null,
            $promptID: 1,
            $reason: 'After wandering through endless caves in the game with repetitive music, the music changes for only one scene to a complex, long, cool song. It reminds me of all that is great about old school adventure games.',
            $source: null,
            $who: null,
            $rating: 4,
            $recordedDate: 'June 8, 2018',
            $eventDate: null,
            $updatedDate: 'June 8, 2018',
            $collection: 'Favorites',
            $publicFlag: 0,
          }, (err) => {
            if (err) {
              throw err;
            }
          });
          
  db.all('SELECT * FROM Gminder', (err, rows) => {
    if (err) {
      throw err;
    }
    console.log(`Finished seeding. There are ${rows.length} rows into the Gminder table.`);
  });
});
