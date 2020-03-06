'use strict'

const axios = require ('axios').default ;
const spoonacular = axios.create ({
    baseURL: 'https://api.spoonacular.com/recipes',
})

const zomato = axios.create ({
    headers : {
        "user-key" : "566dcb269c08eada33d28bdc14503b8f"
    }
})

let recommendResto ;
let index = Math.round(Math.random()*15)

// const randomResto = require ('../helpers/randomResto')

const { CookPlan, User } = require('../models')

class CookPlanController {
    static showAll(req, res, next) {
        CookPlan.findAll({
            where : {
                UserId : req.currentUserId
            },
            order: [['cooking_date', 'DESC']]
        }).then(plans => {
            res.status(200).json(plans);
        }).catch(next)
    }
    static createPlan(req, res, next) {
        const query = req.body.name.replace(/ /g, "+") ;
        const spoonacular_key = process.env.SPOONACULAR_KEY ;
        const UserId = req.currentUserId ;
        // const recommendResto = randomResto() 

        zomato.get(`https://developers.zomato.com/api/v2.1//search?entity_id=74&entity_type=city`)

        .then ( (response) => {
            
            recommendResto = response.data.restaurants[index].restaurant.url ;

            return spoonacular.get(`/search?query=${query}&number=1&apiKey=${spoonacular_key}`)
        })

        .then ((response) =>{

            const recipeId = response.data.results[0].id ;

            return spoonacular.get(`/${recipeId}/information?apiKey=${spoonacular_key}`)
        })

        .then ( (response) => {

            const payload = {
                name: req.body.name,
                goal: req.body.goal,
                cooking_date: req.body.cooking_date,
                recipe_link : response.data.sourceUrl,
                video_link : recommendResto,
                status: req.body.status,
                UserId : UserId
            }

            return CookPlan.create(payload).then(plan => {
                res.status(201).json(plan);
            }).catch(next)
        })

        .catch((err)=>{
            console.log(err);
        })

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
                return CookPlan.findOne({
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
                id: deleteId
            }
        }).then(plan => {
            if (plan) {
                return CookPlan.destroy( {
                    where : {
                        id : deleteId
                    }
                })
            } else {
                throw new Error()
            }
        }).then(plan => {
            res.status(200).json({
                message : 'deleted'
            })
        })
        .catch(next)
    }
}

module.exports = { CookPlanController };