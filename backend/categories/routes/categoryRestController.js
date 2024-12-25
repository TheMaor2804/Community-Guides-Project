const express = require("express");
const { getCategories, getCategoryById, deleteCategory, updateCategory, createCategory } = require("../models/categoryAccessDataService");
const { handleError } = require("../../utils/handleErrors");
const auth = require("../../auth/authService");

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const categories = await getCategories();
        res.send(categories);
    } catch (error) {
        return handleError(res, error.status || 400, error.message);
    }
});

router.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const category = await getCategoryById(id);
        res.send(category);
    } catch (error) {
        return handleError(res, error.status || 400, error.message);
    }
});

router.post("/", auth, async (req, res) => {
    try {
        const userInfo = req.user;
        if (!userInfo.isAdmin)
            return handleError(res, 403, "Authorization Error: You cannot create category");
        let category = req.body;
        category = await createCategory(category);
        res.status(201).send(category);
    } catch (error) {
        handleError(res, error.status || 400, error.message);
    }
});

router.put("/:id", auth, async (req, res) => {
    try {
        const userInfo = req.user;
        if (!userInfo.isAdmin)
            return handleError(res, 403, "Authorization Error: You cannot update category");
        const newCategory = req.body;
        const { id } = req.params;
        const category = await updateCategory(id, newCategory);
        res.send(category);
    } catch (error) {
        return handleError(res, error.status || 400, error.message);
    }
});

router.delete("/:id", auth, async (req, res) => {
    try {
        const userInfo = req.user;
        if (!userInfo.isAdmin)
            return handleError(res, 403, "Authorization Error: You cannot delete category");
        const { id } = req.params;
        const category = await deleteCategory(id);
        res.send(category);
    } catch (error) {
        return handleError(res, error.status || 400, error.message);
    }
});

module.exports = router;