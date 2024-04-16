require('dotenv').config(); // Load environment variables
const { MongoClient, ServerApiVersion } = require('mongodb');

// Use the environment variable for the URI
const uri = process.env.DB_URI;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();
    console.log("Connected successfully to MongoDB Atlas!");
    // Perform database operations here if needed
    await client.db("admin").command({ ping: 1 });
  } catch (error) {
    console.error("Failed to connect to MongoDB Atlas:", error);
    process.exit(1);
  }
}

module.exports = { run };
