const bcrypt = require("bcryptjs");

const generateUserPassword = (password) => bcrypt.hashSync(password, 10);

const comaprePasswords = (password, cryptPassword) => {
  return bcrypt.compareSync(password, cryptPassword);
};

const generateUserEmail = (email) => bcrypt.hashSync(email, 10);

const compareEmails = (email, cryptEmail) => {
  return bcrypt.compareSync(email, cryptEmail);
};

module.exports = { generateUserPassword, comaprePasswords, generateUserEmail, compareEmails };
