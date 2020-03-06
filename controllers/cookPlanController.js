'use strict'

const axios = require ('axios').default ;
const spoonacular = axios.create ({
    baseURL: 'https://api.spoonacular.com/recipes'
})

const { CookPlan, User } = require('../models')

class CookPlanController {
    static showAll(req, res, next) {
        CookPlan.findAll({
            order: [['cooking_date', 'DESC']]
        }).then(plans => {
            res.status(200).json(plans);
        }).catch(next)
    }
    static createPlan(req, res, next) {
        const query = req.body.name.replace(/ /g, "+") ;
        const key = process.env.SPOONACULAR_KEY ;

        spoonacular.get(`/search?query=${query}&number=1&apiKey=${key}`)
        .then ((response)=>{
            const recipeId = response.data.results[0].id ;

            return spoonacular.get(`/${recipeId}/information?apiKey=${key}`)
        })

        .then ( (response) => {

            const payload = {
                name: req.body.name,
                goal: req.body.goal,
                cooking_date: req.body.cooking_date,
                recipe_link : response.data.sourceUrl,
                status: req.body.status
            }

            return CookPlan.create(payload).then(plan => {
                res.status(201).json(plan);
            }).catch(next)
        })

        .catch(next)

    }

    static updatePlan(req, res, next) {
        let updateId = +req.params.id;
        const payload = {
            name: req.body.name,
            goal: req.body.goal,
            cooking_date: req.body.cooking_date,
            status: req.body.status
        }
        CookPlan.update(payload, {
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
        CookPlan.findOne({
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