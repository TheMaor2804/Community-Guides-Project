const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    user_id: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 256,
    },
    category: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    upvotes: [String],
    downvotes: [String],
    youtubeUrl: {
        type: String,
        RegExp: /^(https?:\/\/)?(www\.)?youtube\.com\/@.*$/,
    },
    isApproved: {
        type: Boolean,
        default: false,
    },
    isFeatured: {
        type: Boolean,
        default: false,
    },
    // isRejected: {
    //     type: Boolean,
    //     default: false,
    // },
    // rejectionMessage: {
    //     type: String,
    //     default: "",
    // },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
});

const Guide = mongoose.model("guide", schema);

module.exports = Guide;