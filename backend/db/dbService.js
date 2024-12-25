const connectToLocalDb = require("./mongodb/connectToMongodbLocally.js");
const connectToAtlasDb = require("./mongodb/connectToAtlas.js");

const config = require("config");
const ENVIRONMENT = config.get("ENVIRONMENT");

const connectToDatabase = async () => {
    if (ENVIRONMENT === "development") {
        await connectToLocalDb();
    }
    if (ENVIRONMENT === "production") {
        await connectToAtlasDb();
    }
};

module.exports = connectToDatabase;
