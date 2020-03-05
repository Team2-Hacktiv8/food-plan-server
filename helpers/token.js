'use strict'
const jwt = require('jsonwebtoken')

function getToken(payload) {
  return jwt.sign(payload, process.env.SECRET)
}

function verify(payload) {
  return jwt.verify(payload, process.env.SECRET)
}

module.exports = {
  getToken,
  verify
}