const Joi = require("joi");

const validateGuideWithJoi = (guide) => {
    const guideSchema = Joi.object({
        title: Joi.string().min(2).max(256).required(),
        content: Joi.string().min(50).required(),
        category: Joi.string().length(24).required(),
        linkedBuild: Joi.string().length(24).optional().allow(""),
        youtubeUrl: Joi.string()
            .pattern(/^(https?:\/\/)?(www\.)?youtube\.com\/.*$/)
            .optional().allow(""),
    });
    return guideSchema.validate(guide);
}

module.exports = validateGuideWithJoi;