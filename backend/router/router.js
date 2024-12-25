const express = require("express");
const guidesRestController = require("../guides/routes/guidesRestController");
const usersRouterController = require("../users/routes/usersRestController");
const categoryRouterController = require("../categories/routes/categoryRestController");
const { handleError } = require("../utils/handleErrors");

const router = express.Router();

router.use("/guides", guidesRestController);
router.use("/users", usersRouterController);
router.use("/categories", categoryRouterController);

router.use((req, res) => {
    return handleError(res, 404, "Path not found");
});

module.exports = router;