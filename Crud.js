// Import database module
const Data = require('./Database');

// Create
let insertData = () => {
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
        return collection.insertMany(Data.documents);
    })
    .then((response) => {
        console.log('Inserted: ', response.result.n, 'documents');
        console.log('documents', response.ops);  
    })
    .then(() => client.close())
    .catch((e) => console.log(e));
};

module.exports = { insertData }