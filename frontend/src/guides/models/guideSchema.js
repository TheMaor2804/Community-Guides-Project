import Joi from "joi";

const guideSchema = {
    title: Joi.string().min(2).max(256).required(),
    content: Joi.string().min(50).required().messages({
        'string.min': 'Content is not long enough.',
        'any.required': 'Content is required.',
    }),
    category: Joi.string().length(24).required(),
    linkedBuild: Joi.string().length(24).optional().allow(""),
    youtubeUrl: Joi.string()
        .pattern(/^(https?:\/\/)?(www\.)?youtube\.com\/.*$/)
        .optional().allow(""),
}

export default guideSchema;