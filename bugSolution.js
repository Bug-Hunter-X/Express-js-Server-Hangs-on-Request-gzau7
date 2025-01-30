const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World!');
  res.end(); // Added res.end() to close the response
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});