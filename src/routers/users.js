const express = require("express");

const userRouter = express.Router();

const controllerUser = require("../controllers/users");
const authorize = require("../middlewares/authorize");

userRouter.get("/", authorize.checkToken, controllerUser.getUserById);
userRouter.patch("/", authorize.checkToken, controllerUser.updateUser);
userRouter.delete("/", authorize.checkToken, controllerUser.delete);

module.exports = userRouter;