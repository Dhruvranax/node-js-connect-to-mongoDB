const { MongoClient, ObjectId } = require('mongodb');
const url = 'mongodb://localhost:27017';
const database = 'first_db';
const client = new MongoClient(url);

async function getData() {
    try {
        await client.connect();
        let db = client.db(database);
        let collection = db.collection('new');
        let data = await collection.find({}).toArray();
        await collection.insertOne(
            {_id: 5,name: 'rajesh', subject: 'node js '}

        ) 
        console.log(data);

        console.log("connection sucessful");
    } catch (err) {
        console.error(err);
        console.log("connection fail")
    } finally {
        await client.close();
    }
}
getData();
