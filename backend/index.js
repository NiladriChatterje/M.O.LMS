require('dotenv').config();
const express = require('express')
const sql = require('mysql')
const cors = require('cors');
const bodyParser = require('body-parser')

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

function fetchData(id, password, table) {
    const connection = sql.createConnection({
        user: 'root',
        host: 'localhost',
        password: ''
    });
    connection.connect(function (err) {
        if (err) throw err;
        console.log("Connected!");

        connection.query(sql, function (err, result) {
            if (err) throw err;
            return result;
        });
    });
}

app.post('/getLoginData', (req, res) => {
    const { id, password, admin } = req.body
    fetchData(JSON.parse(id), JSON.parse(password), JSON.parse(admin));

});

app.listen(5000, () => { console.log('Listening on Port 5000') })