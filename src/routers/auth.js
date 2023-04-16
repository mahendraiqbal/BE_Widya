const express = require("express");

const authRouter = express.Router();
const authController = require('../controllers/auth');
const validate = require('../middlewares/validate');
const authorize = require('../middlewares/authorize');

authRouter.post("/register", validate.register, authController.register);
authRouter.post("/login", validate.login, authController.login);
authRouter.delete("/", authorize.checkToken, authController.logout);

module.exports = authRouter;