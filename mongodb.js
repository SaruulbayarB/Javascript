// mongoConnect.js

const { MongoClient } = require("mongodb");

// Replace <db_password> with your actual password
const uri =
  "mongodb+srv://SaruulbayarB:x0vq2KETVwtUgF9y@callengo.gduwqeh.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    console.log("✅ Connected to MongoDB");

    // Example: Access a database and collection
    const database = client.db("myDatabase"); // Change to your DB name
    const collection = database.collection("users"); // Change to your collection

    // Example query (optional)
    const user = await collection.findOne({});
    console.log("Sample document:", user);
  } catch (error) {
    console.error("❌ Connection error:", error);
  } finally {
    await client.close();
    console.log("🔒 Connection closed");
  }
}

run();
