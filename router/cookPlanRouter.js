'use strict'

const express = require('express');
const router = express.Router();
const { CookPlanController } = require('../controllers/cookPlanController');

router.get('/', CookPlanController.showAll);

router.post('/create', CookPlanController.createPlan);

router.post('/update/:id', CookPlanController.updatePlan);

router.get('/delete/:id', CookPlanController.delete);

module.exports = { cookPlanRouter: router }