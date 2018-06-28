// This is using express.

const express = require('express');
const app = express();

const PORT = process.env.PORT || 4001;

// Set up like codegold79's API
const gminders = {
  records: {
    gminders: [
            {
              id: 1,
              other: 2
            },
            {
              id: 2,
              other: 3
            }
          ]
  }
};

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

app.get('/gminder/Read.php', (req, res, next) => {
  const arrayToSend = gminders;
	res.send(arrayToSend);
});
