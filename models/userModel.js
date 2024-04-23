const { client } = require('../config/dbConfig');

const db = client.db("personalWebsiteData");
const users = db.collection("users");

const findUserByUsername = async (username) => {
    return await users.findOne({ username });
};

const createUser = async (user) => {
    return await users.insertOne(user);
};

module.exports = { findUserByUsername, createUser };