require('dotenv').config();
const MongoClient = require('mongodb').MongoClient;
const express = require('express')
const cors = require('cors');
const bodyParser = require('body-parser')

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json());
let mongoClient;
let db;
try {
    mongoClient = new MongoClient('mongodb://127.0.0.1:27017/');
    db = mongoClient.db('mosys');
}
catch (error) {
    console.log('error compromised : ' + error)
}


async function fetchData(id, password, collection) {
    const output = await db.collection(collection).find({ _id: id, password: password }).toArray();
    try {
        if (output.length !== 0)
            return JSON.stringify(output[0]);

    } catch (err) {
        console.log(err.message);
    }
    return false;
}

app.post('/updatestdmarks', async (req, res) => {
    const { sem, marks, std_roll, adminLevel, subject, precededAuthority } = req.body;
    JSON.parse(marks);
    const result = await db.collection('student').findOne({ _id: parseInt(JSON.parse(std_roll)), semester: parseInt(JSON.parse(sem)) })
    if (!result) { res.send('No such record of student found'); return; }
    let deserialized_adminlevel = JSON.parse(adminLevel);
    let deserialized_subject = JSON.parse(subject);
    let deserialized_precededAuthority = JSON.parse(precededAuthority);
    console.log(deserialized_precededAuthority)
    console.log(deserialized_adminlevel)
    if (Object.keys(result.subjects).includes(JSON.parse(subject))) {

        if (deserialized_adminlevel == 'examiner') {
            result.subjects[deserialized_subject]['examiner'].score = parseFloat(JSON.parse(marks));
            let fetchCollection = db.collection('student');
            let success = await fetchCollection.replaceOne({ _id: parseInt(JSON.parse(std_roll)) }, result);

            if (success)
                res.send(JSON.stringify(result));
            return;
        }
        if (deserialized_adminlevel !== 'examiner' && result?.subjects[deserialized_subject][deserialized_precededAuthority]['score'] !== null) {
            result.subjects[deserialized_subject][deserialized_adminlevel].score = parseFloat(JSON.parse(marks));

            let success = await db.collection('student').replaceOne({ _id: parseInt(JSON.parse(std_roll)) }, result);

            if (success)
                res.send(JSON.stringify(result));
        } else {
            res.send('Preceded Authority hasn\'t updated the marks of this subject ')
        }
    } else { res.send('No Such Subject') }

});

app.post('/getLoginData', async (req, res) => {
    const { id, password, admin } = req.body
    let result = JSON.stringify(await fetchData(parseInt(JSON.parse(id)), JSON.parse(password), JSON.parse(admin)));
    res.send(result);
});
app.post('/updatestdremarks', async (req, res) => {
    const { result } = req.body;
    const deserialzed_result = JSON.parse(result)
    console.log(JSON.parse(result))
    const success = await db.collection('student').replaceOne({ _id: parseInt(deserialzed_result?._id) }, deserialzed_result);
    if (success) res.send('Remark Updated')
})
app.listen(5000, () => { console.log('Listening on Port 5000') })