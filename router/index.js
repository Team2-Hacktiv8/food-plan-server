'use strict'

const express = require('express');
const router = express.Router();
const { cookPlanRouter } = require('./cookPlanRouter');
const { userRouter } = require('./userRouter');

router.use('/cookplans', cookPlanRouter);
router.use('/users', userRouter);

module.exports = { router }