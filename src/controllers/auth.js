const authModel = require("../models/auth");
const responseHelper = require("../helpers/sendResponse");

const register = (req, res) => {
    const { body } = req;
    const email = body.email;

    authModel
        .register(body, email)
        .then(({ status, result }) => {
            const objResponse = {
                id: result.insertid,
                email: body.email,
            };
            responseHelper.success(res, status, {
                msg: "Registration Successful",
                data: objResponse,
            });
        })
        .catch(({ status, err }) => {
            console.log(err);
            if (status == 400) return responseHelper.error(res, status, err);
            responseHelper.error(res, status, err);
        });
};

const login = (req, res) => {
    const { body } = req;

    authModel
        .login(body)
        .then(({ status, result }) => {
            responseHelper.success(res, status, {
                msg: "Login Successful",
                data: result,
            });
        })
        .catch(({ status, err }) => {
            responseHelper.error(res, status, err);
        });
};

const logout = (req, res) => {
    const token = req.header('x-access-token');

    authModel
        .logout(token)
        .then(({ status }) => {
            return responseHelper.success(res, status, {
                msg: "Logout Succcessful"
            });
        })
        .catch(({ status, err }) => {
            responseHelper.error(res, status, err);
        });
};

module.exports = {
    register,
    login,
    logout,
};