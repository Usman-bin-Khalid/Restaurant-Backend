const express = require('express');
// rest Objec
const app = express();
// route
// URL http://localhost:8000
app.get('/', (req, res) => {
    return res.status(200).send('</h1> Welcome to Food Server App </h1>');
});

PORT = 8080;
// listen
app.listen(PORT, () => {
  console.log(`Server is running on port : ${PORT}`);
});




