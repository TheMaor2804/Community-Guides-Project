const express = require("express");
const { getGuides, getGuideById, getMyGuides, createGuide, deleteGuide, updateGuide, upvoteGuide, downvoteGuide, approveGuide, featureGuide } = require("../models/guidesAccessDataService");
const normalizeGuide = require("../helpers/normalizeGuide");
const { handleError } = require("../../utils/handleErrors");
const auth = require("../../auth/authService");
const validateGuide = require("../validation/guideValidationService");

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const guides = await getGuides();
        res.send(guides);
    } catch (error) {
        return handleError(res, error.status || 400, error.message);
    }
});

router.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const guide = await getGuideById(id);
        res.send(guide);
    } catch (error) {
        return handleError(res, error.status || 400, error.message);
    }
});

router.get("/myGuides/", auth, async (req, res) => {
    try {
        const userInfo = req.user;
        const guides = await getMyGuides(userInfo._id);
        res.send(guides);
    } catch (error) {
        return handleError(res, error.status || 400, error.message);
    }
});

router.post("/", auth, async (req, res) => {
    try {
        const userInfo = req.user;
        const errorMessage = validateGuide(req.body);
        if (errorMessage !== "")
            return handleError(res, 400, "Validation error: " + errorMessage);
        const displayName = userInfo.displayName;
        let guide = normalizeGuide(req.body, userInfo._id, displayName);
        guide = await createGuide(guide);
        res.status(201).send(guide);
    } catch (error) {
        handleError(res, error.status || 400, error.message);
    }
});

router.put("/:id", auth, async (req, res) => {
    try {
        const userInfo = req.user;
        const newGuide = req.body;
        const { id } = req.params;
        const fullGuideFromDb = await getGuideById(id);
        if (userInfo._id !== fullGuideFromDb.user_id.toString() && !userInfo.isAdmin)
            return handleError(res, 403, "Authorization Error: Only the same user or admin can update this guide");
        const errorMessage = validateGuide(newGuide);
        if (errorMessage !== "")
            return handleError(res, 400, "Validation error: " + errorMessage);
        const guide = normalizeGuide(newGuide);
        guide = await updateGuide(id, guide);
        res.send(guide);
    } catch (error) {
        handleError(res, error.status || 400, error.message);
    }
});

router.delete("/:id", auth, async (req, res) => {
    try {
        const userInfo = req.user;
        const { id } = req.params;
        const fullGuideFromDb = await getGuideById(id);
        if (userInfo._id !== fullGuideFromDb.user_id.toString() && !userInfo.isAdmin)
            return handleError(res, 403, "Authorization Error: Only the same user or admin can delete this guide");
        let guide = await deleteGuide(id);
        res.send(guide);
    } catch (error) {
        handleError(res, error.status || 400, error.message);
    }
});

router.patch("/:id/upvote", auth, async (req, res) => {
    try {
        const { id } = req.params;
        const userId = req.user._id;
        const guide = await upvoteGuide(id, userId);
        res.send(guide);
    } catch (error) {
        handleError(res, error.status || 400, error.message);
    }
});
router.patch("/:id/downvote", auth, async (req, res) => {
    try {
        const { id } = req.params;
        const userId = req.user._id;
        const guide = await downvoteGuide(id, userId);
        res.send(guide);
    } catch (error) {
        handleError(res, error.status || 400, error.message);
    }
});

router.patch("/:id/approve", auth, async (req, res) => {
    try {
        const userInfo = req.user;
        if (!userInfo.isAdmin && !userInfo.isMod)
            return handleError(res, 403, "Authorization Error: Only an admin or moderator can approve a guide");
        const { id } = req.params;
        const guide = await approveGuide(id);
        res.send(guide);
    } catch (error) {
        handleError(res, error.status || 400, error.message);
    }
});

router.patch("/:id/feature", auth, async (req, res) => {
    try {
        const userInfo = req.user;
        if (!userInfo.isAdmin)
            return handleError(res, 403, "Authorization Error: Only an admin can feature a guide");
        const { id } = req.params;
        const guide = await featureGuide(id);
        res.send(guide);
    } catch (error) {
        handleError(res, error.status || 400, error.message);
    }
});

module.exports = router;