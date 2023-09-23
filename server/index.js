const express = require('express');
const app = express();
const port = 5000 || process.env.PORT;
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => console.log('Server listening on port '+port+'!'));