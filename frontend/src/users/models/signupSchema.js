import Joi from "joi";

const signupSchema = {
    displayName: Joi.string().min(4).max(25).regex(/^[a-zA-Z0-9\s]+$/).required(),
    email: Joi.string()
        .ruleset.pattern(
            /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
        )
        .rule({ message: '"Email" must be a valid email format' })
        .required(),
    password: Joi.string()
        .ruleset.regex(
            /((?=.*\d{1})(?=.*[A-Z]{1})(?=.*[a-z]{1})(?=.*[!@#$%^&*-.]{1}).{8,24})/
        )
        .rule({
            message:
                '"Password" must be 8-24 characters long, contain an uppercase letter, a lowercase letter, a number and one of the following characters !@#$%^&*-.',
        })
        .required(),
    confirmPassword: Joi.string()
        .valid(Joi.ref('password'))
        .required()
        .messages({
            'any.only': 'Passwords must match',
            'any.required': '"confirmedPassword" is required',
        }),
};


export default signupSchema;