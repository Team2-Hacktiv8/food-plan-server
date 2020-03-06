'use strict'
const jwt = require('jsonwebtoken')

function getToken(payload) {
  let token = jwt.sign(payload, process.env.SECRET)
  return token
}

function verify(payload) {
  return jwt.verify(payload, process.env.SECRET)
}

module.exports = {
  getToken,
  verify
}