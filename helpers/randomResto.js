const axios = require ('axios').default ;

const zomato = axios.create ({
    headers : {
        "user-key" : "566dcb269c08eada33d28bdc14503b8f"
    }
})


function randomResto () {
    let index = Math.round(Math.random()*15)

    zomato.get(`https://developers.zomato.com/api/v2.1//search?entity_id=74&entity_type=city`)

        .then ( (response) => {
            return response.data.restaurants[index].restaurant.url
        })

        .catch ( (err)=> {
            throw err
        })
}

module.exports = randomResto

