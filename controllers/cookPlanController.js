'use strict'

const { Plan, User } = require('../models')

class CookPlanController {
    static showAll(req, res, next) {
        Plan.findAll({
            order: [['cooking_date', 'DESC']]
        }).then(plans => {
            res.status(200).json(plans);
        }).catch(next)
    }
    static createPlan(req, res, next) {
        const payload = {
            name: req.body.name,
            goal: req.body.goal,
            cooking_date: req.body.cooking_date,
            status: req.body.status
        }
        Plan.create(payload).then(plan => {
            res.status(201).json(plan);
        }).catch(next)
    }

    static updatePlan(req, res, next) {
        let updateId = +req.params.id;
        const payload = {
            name: req.body.name,
            goal: req.body.goal,
            cooking_date: req.body.cooking_date,
            status: req.body.status
        }
        Plan.update(payload, {
            where: {
                id: updateId
            }
        }).then(result => {
            if (result) {
                return Plan.findOne({
                    where: {
                        id: updateId
                    }
                })
            } else {
                throw new Error()
            }
        }).then(plan => { res.status(200).json(plan) }).catch(next)
    }

    static delete(req, res, next) {
        let deleteId = +req.params.id;
        Plan.findOne({
            where: {
                id: updateId
            }
        }).then(plan => {
            if (plan) {
                return Plan.destroy(updateId)
            } else {
                throw new Error()
            }
        }).then(plan => { res.status(200) }).catch(next)
    }
}

module.exports = { CookPlanController };