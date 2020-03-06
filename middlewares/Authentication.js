const { User } = require('../models')
const { verify } = require('../helpers/token')

function authentication(req, res, next) {
 try{
  if(req.header.token) {
    let decode = verify(req.header.token)
    req.currentUserId = decode.id
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