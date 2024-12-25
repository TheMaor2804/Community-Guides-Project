const config = require('config');
const validateCategoryWithJoi = require('./Joi/validateCategoryWithJoi');

const validator = config.get('VALIDATOR');

const validateCategory = (category) => {
    if (validator === "joi") {
        const { error } = validateCategoryWithJoi(category);
        return error ? error.details[0].message : "";
    }
};

module.exports = validateCategory;