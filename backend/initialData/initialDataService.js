const fs = require('fs');
const path = require('path');
const { registerUser } = require('../users/models/usersAccessDataService');
const { createCategory } = require('../categories/models/categoryAccessDataService');
const { createGuide } = require('../guides/models/guidesAccessDataService');

const dataFilePath = path.join(__dirname, 'data.json');

function readDataFromFile() {
    try {
        const data = fs.readFileSync(dataFilePath, 'utf8');
        return JSON.parse(data);
    } catch (err) {
        console.error('Error reading data from file:', err);
        return null;
    }
}

const createInitialUsers = async () => {
    const data = readDataFromFile();
    if (!data) {
        return;
    }
    data.users.forEach(async (user) => {
        await registerUser(user);
    });
}

const createInitialCategories = async () => {
    const data = readDataFromFile();
    if (!data) {
        return;
    }
    data.categories.forEach(async (category) => {
        await createCategory(category);
    });
}

const createInitialGuides = async () => {
    const data = readDataFromFile();
    if (!data) {
        return;
    }
    data.guides.forEach(async (guide) => {
        await createGuide(guide);
    });
}

module.exports = {
    createInitialUsers,
    createInitialCategories,
    createInitialGuides,
};
