const normalizeGuide = (guide, userId, displayName) => {
    return {
        title: guide.title,
        content: guide.content,
        category: guide.category,
        user_id: guide.userId || userId,
        author: displayName,
        youtubeUrl: guide.youtubeUrl
    };
};

module.exports = normalizeGuide;