const express = require("express");
const {
  registerUser,
  getUser,
  getUsers,
  loginUser,
  updateUser,
  deleteUser,
} = require("../models/usersAccessDataService");
const auth = require("../../auth/authService");
const { handleError } = require("../../utils/handleErrors");
const { validateRegistration, validateLogin, validateUpdate } = require("../validation/userValidationService");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const uniqueDisplayName = req.body.displayName.toLowerCase().trim();
    const error = validateRegistration(req.body);
    if (error) return handleError(res, 400, `Joi Error: ${error}`);
    let user = await registerUser({ ...req.body, uniqueDisplayName });
    res.send(user);
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

router.put("/:id", auth, async (req, res) => {
  try {
    const userInfo = req.user;
    const { id } = req.params;
    const newUserData = req.body;

    if (userInfo._id !== id && !userInfo.isAdmin) {
      return handleError(
        res,
        403,
        "Authorization Error: Only the same user or admin can update user info"
      );
    }

    const error = validateUpdate(newUserData);
    if (error) return handleError(res, 400, `Joi Error: ${error}`);

    let user = await updateUser(id, newUserData);
    res.send(user);
  } catch (error) {
    return handleError(res, error.status || 400, error.message);
  }
});

router.delete("/:id", auth, async (req, res) => {
  try {
    const userInfo = req.user;
    const { id } = req.params;

    if (userInfo._id !== id && !userInfo.isAdmin) {
      return handleError(
        res,
        403,
        "Authorization Error: Only the same user or admin can delete user"
      );
    }

    let user = await deleteUser(id);
    res.send(user);
  } catch (error) {
    return handleError(res, error.status || 400, error.message);
  }
});

module.exports = router;
