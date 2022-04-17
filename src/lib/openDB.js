import { MongoClient } from "mongodb";

const uri = process.env.MONGO_URI;
const options = { useNewUrlParser: true, useUnifiedTopology: true };

export async function openDB() {
    const client = new MongoClient(uri, options);

    if (!client.isConnected) {
        await client.connect();
    }
    return client.db('tiktokclone');
}