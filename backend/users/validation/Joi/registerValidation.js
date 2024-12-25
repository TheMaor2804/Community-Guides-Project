const Joi = require("joi");

const registerValidation = (user) => {
  const schema = Joi.object({
    displayName: Joi.string().min(4).max(25).regex(/^[a-zA-Z0-9\s]+$/).required(),
    email: Joi.string()
      .ruleset.pattern(
        /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
      )
      .rule({ message: 'user "email" must be a valid email' })
      .required(),
    password: Joi.string()
      .ruleset.regex(
        /((?=.*\d{1})(?=.*[A-Z]{1})(?=.*[a-z]{1})(?=.*[!@#$%^&*-.]{1}).{8,24})/
      )
      .rule({
        message:
          'user "password" must be 8-24 characters long, contain an uppercase letter, a lowercase letter, a number and one of the following characters !@#$%^&*-.',
      })
      .required(),
  });
  return schema.validate(user);
};

module.exports = registerValidation;
