const config = require('config');
const validateGuideWithJoi = require('./Joi/validateGuideWithJoi');

const validator = config.get('VALIDATOR');

const validateGuide = (guide) => {
    if (validator === "joi") {
        const { error } = validateGuideWithJoi(guide);
        return error ? error.details[0].message : "";
    }
};

module.exports = validateGuide;