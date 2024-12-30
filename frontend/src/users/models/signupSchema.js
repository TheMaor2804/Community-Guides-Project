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
    birthDate: Joi.date().required()
        .custom((value, helpers) => {
            const now = new Date();
            let age = now.getFullYear() - value.getFullYear();
            const months = now.getMonth() - value.getMonth();
            const days = now.getDate() - value.getDate();

            if (months < 0 || (months === 0 && days < 0)) {
                age--;
            }

            if (age < 14) {
                return helpers.error('date.ageInvalid', {
                    message: 'You must be at least 14 to sign up'
                });
            }

            return value;
        })
        .messages({
            'date.ageInvalid': 'You must be at least 14 to sign up'
        }),
};


export default signupSchema;