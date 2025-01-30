const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // This is where the bug is.
  res.send('Hello World!');
  // res.end() is missing.  Without it the connection hangs
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});