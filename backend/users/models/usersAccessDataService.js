const { generateAuthToken } = require("../../auth/providers/jwt");
const _ = require("lodash");
const User = require("./mongodb/User");
const { createError } = require("../../utils/handleErrors");
const { generateUserPassword, comaprePasswords, generateUserEmail, compareEmails } = require("../helpers/bcrypt");
const config = require("config");
const DB = config.get('DB');

const validateDB = () => {
  if (DB !== 'mongodb') {
    const error = new Error('There is no valid database selected to perform this operation');
    error.status = 500;
    throw createError("DB", error);
  }
};

const registerUser = async (newUser) => {
  validateDB();
  try {
    newUser.password = generateUserPassword(newUser.password);
    newUser.email = newUser.email.toLowerCase().trim();
    const users = await User.find();
    users.forEach((user) => {
      if (compareEmails(newUser.email, user.email)) {
        return createError("Mongoose", new Error("User with this email already exists"));
      }
    });
    newUser.email = generateUserEmail(newUser.email);
    let user = new User(newUser);
    user = await user.save();
    user = _.pick(user, ["displayName", "_id"]);
    return user;
  } catch (error) {
    return createError("Mongoose", error);
  }
};

const getUser = async (userId) => {
  validateDB();
  try {
    let user = await User.findById(userId).select("-email -password -__v");
    return user;
  } catch (error) {
    return createError("Mongoose", error);
  }
};

const getUsers = async () => {
  validateDB();
  try {
    let users = await User.find().select("-email -password -__v");
    return users;
  } catch (error) {
    return createError("Mongoose", error);
  }
};

const loginUser = async (email, password) => {
  validateDB();
  try {
    email = email.toLowerCase().trim();
    const users = await User.find();
    let userFromDb;
    users.forEach((user) => {
      if (compareEmails(email, user.email)) {
        userFromDb = user;
        return;
      }
    });

    if (!userFromDb) {
      const error = new Error("Invalid Email or Password");
      error.status = 401;
      return createError("Authentication", error);
    }
    if (!comaprePasswords(password, userFromDb.password)) {
      const error = new Error("Invalid Email or Password");
      error.status = 401;
      return createError("Authentication", error);
    }
    const token = generateAuthToken(userFromDb);
    return token;
  } catch (error) {
    return createError("Mongoose", error);
  }
};

const updateUser = async (userId, updatedUser) => {
  validateDB();
  try {
    if (updatedUser.email) {
      updatedUser.email = updatedUser.email.toLowerCase().trim();
      const users = await User.find();
      users.forEach((user) => {
        if (compareEmails(newUser.email, user.email)) {
          return createError("Mongoose", new Error("User with this email already exists"));
        }
      });
      updatedUser.email = generateUserEmail(updatedUser.email);
    }
    if (updatedUser.password) {
      updatedUser.password = generateUserPassword(updatedUser.password);
    }
    let user = await User.findByIdAndUpdate(userId, updatedUser, { new: true });
    return user;
  } catch (error) {
    return createError("Mongoose", error);
  }
};

module.exports = { registerUser, getUser, getUsers, loginUser, updateUser };
