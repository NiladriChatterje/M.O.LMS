const { MongoClient } = require('mongodb')

const students = [{
    _id: 2182001,
    name: 'Sohini Ghosh',
    semester: 4,
    password: 'SohiniGhosh',
    subjects: {
        ML: {
            examiner: { score: null },
            head_examiner: { score: null, remark: null },
            scrutinizer: { score: null, remark: null },
            tabulator: { score: null, remark: null },
            councilor: { score: null, remark: null }
        },
        DSA: {
            examiner: { score: null },
            head_examiner: { score: null, remark: null },
            scrutinizer: { score: null, remark: null },
            tabulator: { score: null, remark: null },
            councilor: { score: null, remark: null }
        },
        NETWORKING: {
            examiner: { score: null },
            head_examiner: { score: null, remark: null },
            scrutinizer: { score: null, remark: null },
            tabulator: { score: null, remark: null },
            councilor: { score: null, remark: null }
        }
    }
},
{
    _id: 2182002,
    name: 'Satarupa Mukherjee',
    semester: 4,
    password: 'SatarupaMukherjee',
    subjects: {
        ML: {
            examiner: { score: null },
            head_examiner: { score: null, remark: null },
            scrutinizer: { score: null, remark: null },
            tabulator: { score: null, remark: null },
            councilor: { score: null, remark: null }
        },
        DSA: {
            examiner: { score: null },
            head_examiner: { score: null, remark: null },
            scrutinizer: { score: null, remark: null },
            tabulator: { score: null, remark: null },
            councilor: { score: null, remark: null }
        },
        NETWORKING: {
            examiner: { score: null },
            head_examiner: { score: null, remark: null },
            scrutinizer: { score: null, remark: null },
            tabulator: { score: null, remark: null },
            councilor: { score: null, remark: null }
        }
    }
},
{
    _id: 2182003,
    name: 'Mainak Shaw',
    semester: 4,
    password: 'MainakShaw',
    subjects: {
        ML: {
            examiner: { score: null },
            head_examiner: { score: null, remark: null },
            scrutinizer: { score: null, remark: null },
            tabulator: { score: null, remark: null },
            councilor: { score: null, remark: null }
        },
        DSA: {
            examiner: { score: null },
            head_examiner: { score: null, remark: null },
            scrutinizer: { score: null, remark: null },
            tabulator: { score: null, remark: null },
            councilor: { score: null, remark: null }
        },
        NETWORKING: {
            examiner: { score: null },
            head_examiner: { score: null, remark: null },
            scrutinizer: { score: null, remark: null },
            tabulator: { score: null, remark: null },
            councilor: { score: null, remark: null }
        }
    }
},
{
    _id: 2182004,
    name: 'Nil Nitin Mukesh',
    semester: 4,
    password: 'NilNitinMukhesh',
    subjects: {
        ML: {
            examiner: { score: null },
            head_examiner: { score: null, remark: null },
            scrutinizer: { score: null, remark: null },
            tabulator: { score: null, remark: null },
            councilor: { score: null, remark: null }
        },
        DSA: {
            examiner: { score: null },
            head_examiner: { score: null, remark: null },
            scrutinizer: { score: null, remark: null },
            tabulator: { score: null, remark: null },
            councilor: { score: null, remark: null }
        },
        NETWORKING: {
            examiner: { score: null },
            head_examiner: { score: null, remark: null },
            scrutinizer: { score: null, remark: null },
            tabulator: { score: null, remark: null },
            councilor: { score: null, remark: null }
        }
    }
},
{
    _id: 2182005,
    name: 'Student_6',
    semester: 4,
    password: 'Student_6',
    subjects: {
        ML: {
            examiner: { score: null },
            head_examiner: { score: null, remark: null },
            scrutinizer: { score: null, remark: null },
            tabulator: { score: null, remark: null },
            councilor: { score: null, remark: null }
        },
        DSA: {
            examiner: { score: null },
            head_examiner: { score: null, remark: null },
            scrutinizer: { score: null, remark: null },
            tabulator: { score: null, remark: null },
            councilor: { score: null, remark: null }
        },
        NETWORKING: {
            examiner: { score: null },
            head_examiner: { score: null, remark: null },
            scrutinizer: { score: null, remark: null },
            tabulator: { score: null, remark: null },
            councilor: { score: null, remark: null }
        }
    }
},
{
    _id: 2182006,
    name: 'Student_7',
    semester: 4,
    password: 'Student_7',
    subjects: {
        ML: {
            examiner: { score: null },
            head_examiner: { score: null, remark: null },
            scrutinizer: { score: null, remark: null },
            tabulator: { score: null, remark: null },
            councilor: { score: null, remark: null }
        },
        DSA: {
            examiner: { score: null },
            head_examiner: { score: null, remark: null },
            scrutinizer: { score: null, remark: null },
            tabulator: { score: null, remark: null },
            councilor: { score: null, remark: null }
        },
        NETWORKING: {
            examiner: { score: null },
            head_examiner: { score: null, remark: null },
            scrutinizer: { score: null, remark: null },
            tabulator: { score: null, remark: null },
            councilor: { score: null, remark: null }
        }
    }
}];
const semester_to_subs = [{
    1: {
        ML: {

        }
    },
    2: {
        ML: {

        }
    },
    3: {
        ML: {

        }
    }
}];

const Examiner = [{ _id: 100000, name: 'Examiner1', password: 'admin_examiner_1' },
{ _id: 100001, name: 'Examiner2', password: 'admin_examiner_2' },
{ _id: 100002, name: 'Examiner3', password: 'admin_examiner_3' },
{ _id: 100003, name: 'Examiner4', password: 'admin_examiner_4' }];

const Head_examiner = { _id: 111111, name: 'head_examiner', password: 'admin_head_examiner' }
const Scrutinizer = { _id: 123456, name: 'scrutinizer', password: 'admin_scrutinizer' }
const Tabulator = { _id: 654321, name: 'tabulator', password: 'admin_tabulator' }
const Councilor = { _id: 987654, name: 'councilor', password: 'admin_councilor' }

async function setUpSchema() {
    const URI = `mongodb://127.0.0.1:27017`
    try {
        const mongoClient = new MongoClient(URI);
        await mongoClient.connect();
        console.log('Connection established...')

        const db = mongoClient.db('mosys')
        await db.dropDatabase();
        const student_collection = db.collection('student');
        const examiner_collection = db.collection('examiner');
        const head_examiner = db.collection('head_examiner', { capped: true, size: 2, max: 1 });
        const scrutinizer = db.collection('scrutinizer', { capped: true, size: 2, max: 1 });
        const tabulator = db.collection('tabulator', { capped: true, size: 2, max: 1 });
        const councilor = db.collection('councilor', { capped: true, size: 2, max: 1 });

        await student_collection.insertMany(students);
        await examiner_collection.insertMany(Examiner);
        await head_examiner.insertOne(Head_examiner);
        await scrutinizer.insertOne(Scrutinizer);
        await tabulator.insertOne(Tabulator);
        await councilor.insertOne(Councilor);

        console.log('database mosys created... closing connection..\n(recommended to run this file only once)');
        mongoClient.close(true);
    }
    catch (error) {
        console.error(error);
    }

}
setUpSchema();