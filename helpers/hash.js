'use strict'
// Bcrypt
const bcyrpt = require('bcryptjs')

function hashPassword(password) {
  let salt = bcrypt.genSaltSync(10)
  return bcyrpt.hashSync(password, salt)
}

function comperePassword(password, hash) {
  return bcyrpt.compareSync(password, hash)
}

module.exports = { 
  hashPassword,
  comperePassword
 }