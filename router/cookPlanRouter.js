'use strict'

const express = require('express');
const router = express.Router();
const { CookPlanController } = require('../controllers/cookPlanController');
const authentication = require ('../middlewares/Authentication');
const authorization = require ('../middlewares/Authorization');



router.use(authentication)

router.get('/', CookPlanController.showAll);

router.post('/', CookPlanController.createPlan);

router.put('/:id', authorization, CookPlanController.updatePlan);

router.delete('/:id', authorization, CookPlanController.delete);

module.exports = { cookPlanRouter: router }