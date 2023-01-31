const express = require('express');
const bodyParser = require('body-parser');
const api = require('./src/api');

const app = express();
const PORT = 4300;

app.use(bodyParser.json());
app.use('/api/v1', api);

app.listen(PORT, () => console.log(`app listening to port ${PORT}`));