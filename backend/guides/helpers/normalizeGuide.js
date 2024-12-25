const normalizeGuide = (guide, userId, displayName) => {
    return {
        title: guide.title,
        content: guide.content,
        category: guide.category,
        linkedBuild: guide.linkedBuild,
        user_id: guide.userId || userId,
        author: displayName,
        youtubeUrl: guide.youtubeUrl
    };
};

module.exports = normalizeGuide;