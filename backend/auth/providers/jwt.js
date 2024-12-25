const jwt = require("jsonwebtoken");
require("dotenv").config();
const SECRET_WORD = process.env.JWT_SECRET;

const generateAuthToken = (user) => {
  const payload = {
    _id: user._id,
    displayName: user.displayName,
    isAdmin: user.isAdmin,
    isMod: user.isMod,
    isBanned: user.isBanned,
  };
  const token = jwt.sign(payload, SECRET_WORD);
  return token;
};

const verifyToken = (tokenFromClient) => {
  try {
    const payload = jwt.verify(tokenFromClient, SECRET_WORD);
    return payload;
  } catch (error) {
    return null;
  }
};

module.exports = { generateAuthToken, verifyToken };
