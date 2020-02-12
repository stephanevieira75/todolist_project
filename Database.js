// Database
let Database = {
    url: 'mongodb://localhost:27017',
    name: 'todoproject',
    collectionName: 'tasks',
    documents: [
        {
            message: 'Pay bills',
            status: true
        }
    ]
};

module.exports = Database;