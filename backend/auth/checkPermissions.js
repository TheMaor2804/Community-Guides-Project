const { handleError } = require("../utils/handleErrors");

const checkPermissions = permissions => {
    return (req, res, next) => {
        const userInfo = req.user;
        if (permissions.includes('admin') && !userInfo.isAdmin) {
            const error = new Error("Unauthorized user");
            error.status = 401;
            return handleError(res, error.status, error.message);
        }
        if (permissions.includes('mod') && !userInfo.isMod) {
            const error = new Error("Unauthorized user");
            error.status = 401;
            return handleError(res, error.status, error.message);
        }
        else {
            next();
        }
    }
}

module.exports = checkPermissions;