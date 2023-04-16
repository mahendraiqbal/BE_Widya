const resHelper = require('../helpers/sendResponse');
const modelUser = require('../models/users');

const getUserById = (req, res) => {
    const { id } = req.userInfo;

    modelUser
        .getUserById(id)
        .then(({ status, result }) => {
            return resHelper.success(res, status, result);
        })
        .catch(({ status, err }) => {
            resHelper(res, status, err);
        });
};

const deleteUser = (req, res) => {
    const { userInfo } = req;

    modelUser
        .delete(userInfo.id)
        .then(({ status, result }) => {
            resHelper.success(res, status, result);
        })
        .catch(({ status, err }) => {
            resHelper.error(res, status, err)
        })
};

module.exports = {
    getUserById,
    deleteUser,
}