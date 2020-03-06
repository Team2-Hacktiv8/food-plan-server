const { User } = require('../models')
const { comparePassword } = require('../helpers/hash')
const { getToken } = require('../helpers/token')
const { OAuth2Client } = require('google-auth-library');

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
        if (user) {
          let status = comparePassword(req.body.password, user.password)
          if (status) {
            let payload = {
              id: user.id,
              email: user.email
            }
            let token = getToken(payload);
            res.status(200).json(token)
          }
          else {
            next({ name: 'Invalid email or password' })
          }
        }
        else {
          next({ name: 'Invalid email or password' })
        }
      })
      .catch(next)
  }

  static google(req, res, next) {
    let obj = {}
    const getToken = req.headers.token
    const client = new OAuth2Client(CLIENT_ID);
    client.verifyIdToken({
      idToken: token,
      audience: CLIENT_ID,
    })
    .then((tiket) => {
      let payload = tiket.getPayload()
      obj.email = payload.email
      return User.findOne({
        where: {
          email: obj.email
        }
      })
    })
    .then((user) => {
      if(user) {
        return user
      }
      else {
        return User.create({
          email:obj.email,
          password: process.env.DEFAULTPASSWORD
        })
      }
    })
    .then((user) => {
      let payload = {
        id: user.id,
        email: user.email
      }
      let token = getToken(payload)
      res.status(200).json(token)
    })
    .catch(next)
  }

}

module.exports = UserController