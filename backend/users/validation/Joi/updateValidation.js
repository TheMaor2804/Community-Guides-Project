const Joi = require("joi");

const updateValidation = (user) => {
    const schema = Joi.object({
        email: Joi.string()
            .ruleset.pattern(
                /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
            )
            .rule({ message: 'user "email" must be a valid email' }),
        password: Joi.string()
            .ruleset.regex(
                /((?=.*\d{1})(?=.*[A-Z]{1})(?=.*[a-z]{1})(?=.*[!@#$%^&*-.]{1}).{8,24})/
            )
            .rule({
                message:
                    'user "password" must be 8-24 characters long, contain an uppercase letter, a lowercase letter, a number and one of the following characters !@#$%^&*-.',
            }),
    });
    return schema.validate(user);
};

module.exports = updateValidation;
