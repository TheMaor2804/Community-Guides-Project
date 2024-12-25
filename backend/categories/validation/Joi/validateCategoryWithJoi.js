const Joi = require("joi");

const validateCategoryWithJoi = (category) => {
    const categorySchema = Joi.object({
        name: Joi.string().min(2).max(256).required(),
    });
    return categorySchema.validate(category);
}

module.exports = validateCategoryWithJoi;