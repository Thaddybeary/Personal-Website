const { client } = require("../config/dbConfig");

class CRUDModel {
    constructor(collectionName) {
        this.db = client.db("personalWebsiteData");
        this.collection = this.db.collection(collectionName);
    }

    async findAll() {
        return this.collection.find({}).toArray();
    }

    async findOne(id) {
        return this.collection.findOne({ id });
    }

    async create(data) {
        return this.collection.insertOne(data);
    }

    async update(id, data) {
        return this.collection.updateOne({ id }, { $set: data }, { upsert: true });
    }

    async delete(id) {
        return this.collection.deleteOne({ id });
    }
}

module.exports = CRUDModel;
