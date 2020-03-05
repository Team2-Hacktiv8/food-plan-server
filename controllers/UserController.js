const { User } = require('../models')

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
    
  }

}

module.exports = UserController