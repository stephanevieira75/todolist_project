// Import database module
const Data = require('./Database');

// Create
let setTasks = (taskMessage, boolStatus) => {
    const mongoDatabase = require('mongodb');
    const MongoClient = mongoDatabase.MongoClient;

    const client = new MongoClient(Data.url);

    client.connect()
    .then(()=> {
        const db = client.db(Data.name);
        const collection = db.collection(Data.collectionName);
        return collection;
    })
    .then((collection) => {
        return collection.insertOne({message: taskMessage, status: boolStatus});
    })
    .then((response) => {
        console.log('Inserted: ', response.result.n, 'documents');
        console.log('documents', response.ops);  
    })
    .then(() => client.close())
    .catch((e) => console.log(e));
};

// Read
let getTasks = () => {
    const mongoDatabase = require('mongodb');
    const MongoClient = mongoDatabase.MongoClient;

    const client = new MongoClient(Data.url);

    client.connect()
    .then(()=> {
        const db = client.db(Data.name);
        const collection = db.collection(Data.collectionName);
        return collection;
    })
    .then((collection) => {
        return collection.find().toArray();
    })
    .then((documents) => {
        console.log(`${documents.length} tasks founded:`);
        for(ele in documents)
        {
            console.log('[================================]')
            console.log(`  id: "${documents[ele]._id}"\n  message: "${documents[ele].message}"\n  password: "${documents[ele].status}"\n`);
        }  
    })
    .then(() => client.close())
    .catch((e) => console.log(e));
};

module.exports = { setTasks, getTasks }