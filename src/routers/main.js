const express = require('express');
const mainRouter = express.Router();

const authRouter = require('./auth');
const userRouter = require('./users');
const productsRouter = require('./products');

mainRouter.use('/auth', authRouter);
mainRouter.use('/user', userRouter);
mainRouter.use('/products', productsRouter);

module.exports = mainRouter;