const { User } = require('../models')
const { comperePassword } = require('../helpers/hash')

class UserController {

  static register(req, res, next) {
    User.create({
      email: req.body.email,
      password: req.body.password
    })
    .then((user) => {
      let payload = {
        id: user.id,
        email: user.email
      }
      res.status(201).json(payload)
    })
    .catch(next)
  }

  static login(req, res, next) {
    User.findOne({
      where: {
        email: req.body.email
      }
    })
    .then((user) => {
      if(user) {
        let status = comperePassword(req.body.password, User.password)
        if(status) {
          
        }
      }
      else {

      }
    })
  }

}

module.exports = UserController