var express = require('express');
var app = express();
// Enable JS-YAML and file loading and saving
const yaml = require('js-yaml');
const fs   = require('fs');

let database = {};

app.use(express.static(__dirname +'./../../')); //serves the index.html

// Function to get database
app.get('/data', (req, res, next) => {
  try {
    let mydatabase = yaml.safeLoad(fs.readFileSync('./src/server/database.yml', 'utf8'));
    database = mydatabase;
    res.status(200).send(database);
  } catch (e) {
    console.log(e);
    res.status(404).send("Error");
  }
})

// Function to change database
app.put('/data', (req, res, next) => {
  const newData = req.query;
  // Convert JS database object to JSON
  const jsonDatabase = JSON.stringify({newData});
  // Write JSON object to database.yml
  fs.writeFile("./src/server/database.yml", jsonDatabase, function(err) {
    if(err) {
        return console.log(err);
        res.status(404).send()
    }
    console.log("The file was saved!");
    res.status(200).send(newData);
})})

app.listen(3000); //listens on port 3000 -> http://localhost:3000/
