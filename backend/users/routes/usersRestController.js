const express = require("express");
const {
  registerUser,
  getUser,
  getUsers,
  loginUser,
  updateUser,
} = require("../models/usersAccessDataService");
const auth = require("../../auth/authService");
const { handleError } = require("../../utils/handleErrors");
const {
  validateRegistration,
  validateLogin,
} = require("../validation/userValidationService");
const { sendVerificationEmail } = require("../../services/mailer");
const { generateVerificationToken, verifyToken } = require("../../auth/providers/jwt");


const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const uniqueDisplayName = req.body.displayName.toLowerCase().trim();
    const error = validateRegistration(req.body);
    if (error) return handleError(res, 400, `Joi Error: ${error}`);

    let user = await registerUser({ ...req.body, uniqueDisplayName });

    sendVerificationEmail(req.body, generateVerificationToken({ _id: user._id, email: req.body.email }));

    res.send(user);
  } catch (error) {
    return handleError(res, error.status || 400, error.message);
  }
});

router.get("/verify-email", async (req, res) => {
  try {
    const { token } = req.query;
    if (!token) return handleError(res, 400, "Token is required");

    const payload = verifyToken(token);
    if (!payload) return handleError(res, 400, "Invalid token");

    const user = await getUser(payload.id);
    if (!user) return handleError(res, 404, "User not found");

    await updateUser(user._id, { isVerified: true });
    res.send("Email verified");
  } catch (error) {
    return handleError(res, error.status || 400, error.message);
  }
});

router.post("/login", async (req, res) => {
  try {
    const error = validateLogin(req.body);

    if (error) return handleError(res, 400, `Joi Error: ${error}`);

    let { email, password } = req.body;
    const token = await loginUser(email, password);
    res.send(token);
  } catch (error) {
    return handleError(res, error.status || 400, error.message);
  }
});

router.get("/:id", auth, async (req, res) => {
  try {
    const userInfo = req.user;
    const { id } = req.params;

    if (userInfo._id !== id && !userInfo.isAdmin) {
      return handleError(
        res,
        403,
        "Authorization Error: Only the same user or admin can get user info"
      );
    }

    let user = await getUser(id);
    res.send(user);
  } catch (error) {
    return handleError(res, error.status || 400, error.message);
  }
});

router.get("/", auth, async (req, res) => {
  try {
    const isAdmin = req.user.isAdmin;
    if (!isAdmin) {
      return handleError(res, 403, "Authorization Error: Only admin can get all users");
    }
    let users = await getUsers();
    res.send(users);
  } catch (error) {
    return handleError(res, error.status || 400, error.message);
  }
});

module.exports = router;
