'use strict'

const express = require('express');
const router = express.Router();
const { CookPlanController } = require('../controllers/cookPlanController');

router.get('/', CookPlanController.showAll);

router.post('/', CookPlanController.createPlan);

router.put('/:id', CookPlanController.updatePlan);

router.delete('/:id', CookPlanController.delete);

module.exports = { cookPlanRouter: router }