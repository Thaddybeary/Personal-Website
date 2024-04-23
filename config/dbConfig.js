const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = process.env.DB_URI;
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function connect() {
    try {
        await client.connect();
        console.log("Connected successfully to MongoDB Atlas!");
        // Optionally perform a simple operation immediately after connecting
        await client.db("admin").command({ ping: 1 });
    } catch (error) {
        console.error("Failed to connect to MongoDB Atlas:", error);
        // Consider a strategy for retrying or delaying a crash in production
        process.exit(1);
    }
}

async function disconnect() {
    try {
        await client.close();
        console.log("Disconnected from MongoDB Atlas.");
    } catch (error) {
        console.error("Failed to disconnect from MongoDB Atlas:", error);
    }
}

module.exports = { connect, disconnect, client };
