const mongoose = require("mongoose");
require("dotenv").config();

const connectionStringForAtlas = process.env.CONNECTION_STRING_FOR_ATLAS;

const connectToAtlasDb = async () => {
    try {
        await mongoose.connect(connectionStringForAtlas);
        console.log("Connected to MongoDB in atlas");
    } catch (error) {
        console.error("Could not connect to MongoDB", error);
    }
};

module.exports = connectToAtlasDb;
