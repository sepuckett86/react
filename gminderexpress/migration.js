const sqlite3 = require("sqlite3");
const db = new sqlite3.Database('./db.sqlite');

// Begin db.serialize
db.serialize(function() {
db.run('DROP TABLE IF EXISTS Gminder',
  error => {
  if (error) {
        throw error;
      }
});
db.run('CREATE TABLE Gminder (id INTEGER PRIMARY KEY, userID INTEGER NOT NULL, category TEXT NOT NULL, mainResponse TEXT NOT NULL, author TEXT, promptID INTEGER, reason TEXT, source TEXT, who TEXT, rating INTEGER DEFAULT 0, recordedDate TEXT, eventDate TEXT, updatedDate TEXT, collection TEXT, publicFlag INTEGER)',
  error => {
  if (error) {
    throw error;
  }
});

});
// End db.serialize
