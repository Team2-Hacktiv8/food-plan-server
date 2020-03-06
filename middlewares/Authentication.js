const { User } = require('../models')
const { verify } = require('../helpers/token')

function authentication(req, res, next) {
 try{
  if(req.headers.token) {
    let decoded = verify(req.headers.token)
    req.currentUserId = decoded.id
    User.findByPk(
      req.currentUserId
    )
    .then((user) => {
      if(user) {
        next()
      }
      else{
        next({ name:'Not authenticated'})
      }
    })
    .catch((err) => {
      next(err)
    })
  }
  else {
    next({ name:'Not authenticated'})
  }
 }
 catch (err) {
  next(err)
 }
}

module.exports = authentication