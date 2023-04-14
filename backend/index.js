require('dotenv').config();
const express = require('express')
const sql = require('sql')

const app = express();

app.post('/getLoginData', (req, res) => {

});

app.listen(5000, () => { console.log('Listening on Port 5000') })