const express = require('express');
const app = express();


app.get('/api.example.com/items', (req, res, next) => {
  const MyJsonObject = {
  items: [
    { id: 1, name: 'Apples', price: '$2' },
    { id: 2, name: 'Peaches', price: '$5' }
  ]
}
  res.status(200).send(MyJsonObject);
})



app.listen(4000, () => console.log("Server is listening at port 4000"));

module.exports = app;
