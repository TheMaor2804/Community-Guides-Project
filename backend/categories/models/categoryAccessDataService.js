const config = require('config');
const { createError } = require("../../utils/handleErrors");
const Category = require("./mongodb/Category");
const DB = config.get('DB');

const validateDB = () => {
    if (DB !== 'mongodb') {
        const error = new Error('There is no valid database selected to perform this operation');
        error.status = 500;
        throw createError("DB", error);
    }
};

const createCategory = async (newCategory) => {
    validateDB();
    try {
        let category = new Category(newCategory);
        category = await category.save();
        return category;
    } catch (error) {
        return createError("Mongoose", error);
    }
};

const getCategories = async () => {
    validateDB();
    try {
        let categories = await Category.find();
        return categories;
    } catch (error) {
        return createError("Mongoose", error);
    }
};

const getCategoryById = async (id) => {
    validateDB();
    try {
        let category = await Category.findById(id);
        return category;
    } catch (error) {
        return createError("Mongoose", error);
    }
};

const updateCategory = async (categoryId, newCategory) => {
    validateDB();
    try {
        let category = await Category.findByIdAndUpdate(categoryId, newCategory, { new: true });
        return category;
    } catch (error) {
        return createError("Mongoose", error);
    }
};

const deleteCategory = async (categoryId) => {
    validateDB();
    try {
        let category = await Category.findByIdAndDelete(categoryId);
        return category;
    } catch (error) {
        return createError("Mongoose", error);
    }
};

module.exports = { createCategory, getCategories, getCategoryById, updateCategory, deleteCategory };

