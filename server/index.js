const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.static('./public/dist'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.listen(5010, () => {
  console.log('listening on port 5010!');
});

module.exports = app;