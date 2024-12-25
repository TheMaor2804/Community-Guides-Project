const config = require('config');
const { createError } = require('../../utils/handleErrors');
const Guide = require('./mongodb/Guide');
const DB = config.get('DB');

const validateDB = () => {
    if (DB !== 'mongodb') {
        const error = new Error('There is no valid database selected to perform this operation');
        error.status = 500;
        throw createError("DB", error);
    }
};

const createGuide = async (newGuide) => {
    validateDB();
    try {
        let guide = new Guide(newGuide);
        guide = await guide.save();
        return guide;
    } catch (error) {
        return createError("Mongoose", error);
    }
};

const getGuides = async () => {
    validateDB();
    try {
        let guides = await Guide.find().select("-content");
        return guides;
    } catch (error) {
        return createError("Mongoose", error);
    }
};

const getGuideById = async (id) => {
    validateDB();
    try {
        let guide = await Guide.findById(id);
        return guide;
    } catch (error) {
        return createError("Mongoose", error);
    }
};

const getMyGuides = async (userId) => {
    validateDB();
    try {
        let guides = await Guide.find({ user_id: userId }).select("-content");
        return guides;
    } catch (error) {
        return createError("Mongoose", error);
    }
};

const getFavoriteGuides = async (userId) => {
    validateDB();
    try {
        let guides = await Guide.find({ upvotes: userId }).select("-content");

        return guides;
    } catch (error) {
        return createError("Mongoose", error);
    }
};

const updateGuide = async (guideId, newGuide) => {
    validateDB();
    try {
        let guide = await Guide.findByIdAndUpdate(guideId, newGuide, { new: true });
        return guide;
    }
    catch (error) {
        return createError("Mongoose", error);
    }
};

const deleteGuide = async (guideId) => {
    validateDB();
    try {
        let guide = await Guide.findByIdAndDelete(guideId);
        return guide;
    }
    catch (error) {
        return createError("Mongoose", error);
    }
};

const upvoteGuide = async (guideId, userId) => {
    validateDB();
    try {
        let guide = await Guide.findById(guideId);
        if (!guide) {
            const error = new Error('Guide with id: not found');
            error.status = 404;
            return createError("Mongoose", error);
        }
        if (!guide.upvotes.includes(userId)) {
            if (guide.downvotes.includes(userId)) {
                guide.downvotes = guide.downvotes.filter((id) => id !== userId);
            }
            guide.upvotes.push(userId);
            guide = await guide.save();
        } else {
            guide.upvotes = guide.upvotes.filter((id) => id !== userId);
            guide = await guide.save();
        }
        return guide;
    }
    catch (error) {
        return createError("Mongoose", error);
    }
};

const downvoteGuide = async (guideId, userId) => {
    validateDB();
    try {
        let guide = await Guide.findById(guideId);
        if (!guide) {
            const error = new Error('Guide with id: not found');
            error.status = 404;
            return createError("Mongoose", error);
        }
        if (!guide.downvotes.includes(userId)) {
            if (guide.upvotes.includes(userId)) {
                guide.upvotes = guide.upvotes.filter((id) => id !== userId);
            }
            guide.downvotes.push(userId);
            guide = await guide.save();
        } else {
            guide.downvotes = guide.downvotes.filter((id) => id !== userId);
            guide = await guide.save();
        }
        return guide;
    }
    catch (error) {
        return createError("Mongoose", error);
    }
}

const approveGuide = async (guideId) => {
    validateDB();
    try {
        let guide = await Guide.findById(guideId);
        if (!guide) {
            const error = new Error('Guide with id: not found');
            error.status = 404;
            return createError("Mongoose", error);
        }
        guide.isApproved = !guide.isApproved;
        guide = await guide.save();
        return guide;
    }
    catch (error) {
        return createError("Mongoose", error);
    }
}

const featureGuide = async (guideId) => {
    validateDB();
    try {
        let guide = await Guide.findById(guideId);
        if (!guide) {
            const error = new Error('Guide with id: not found');
            error.status = 404;
            return createError("Mongoose", error);
        }
        guide.isFeatured = !guide.isFeatured;
        guide = await guide.save();
        return guide;
    }
    catch (error) {
        return createError("Mongoose", error);
    }
}

module.exports = { createGuide, getGuides, getGuideById, getMyGuides, getFavoriteGuides, updateGuide, deleteGuide, upvoteGuide, downvoteGuide, approveGuide, featureGuide };