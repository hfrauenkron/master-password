const { MongoClient } = require("mongodb");

let db = null;
async function initDatabase() {
  // Connection URL
  const url = "mongodb://localhost:27017/master-password";
  // Database Name
  const dbName = "master-password";

  const client = new MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  // Use connect method to cennect to the server
  await client.connect();

  db = client.db(dbName);
}

async function getCollection(collectionName) {
  if (!db) {
    await initDatabase();
  }
  return db.collection(collectionName);
}

exports.initDatabase = initDatabase;
exports.getCollection = getCollection;

// MongoClient.connect(
//   url,
//   { useNewUrlParser: true, useUnifiedTopology: true },
//   function(error, database) {
//     if (error) throw error;
//     console.log("Database created!");
//     database.close();
//   }
// );

// MongoClient.connect(url, function(error, database) {
//   if (error) throw error;
//   const masterPasswordDb = database.db("master-password");
//   masterPasswordDb.createCollection("secrets", function(error, result) {
//     if (error) throw error;
//     console.log("Collection secrets created!");
//     database.close();
//   });
// });
