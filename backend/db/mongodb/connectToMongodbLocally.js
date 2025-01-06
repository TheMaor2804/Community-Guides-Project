const mongoose = require("mongoose");
const User = require("../../users/models/mongodb/User");
const { createInitialUsers, createInitialCategories, createInitialGuides } = require("../../initialData/initialDataService");
const chalk = require("chalk");
const Category = require("../../categories/models/mongodb/Category");
const Guide = require("../../guides/models/mongodb/Guide");

const connectToLocalDb = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/communityGuides");
        console.log("Connected to MongoDB locally");
        if (await User.countDocuments() === 0) {
            await createInitialUsers();
            console.log(chalk.green("Initial users created"));
        }
        if (await Category.countDocuments() === 0) {
            await createInitialCategories();
            console.log(chalk.green("Initial categories created"));
        }
        if (await Guide.countDocuments() === 0) {
            await createInitialGuides();
            console.log(chalk.green("Initial guides created"));
        }
    } catch (error) {
        console.error("Could not connect to MongoDB", error);
    }
};

module.exports = connectToLocalDb;
