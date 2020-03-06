const { CookPlan } = require('../models')

function authorization(req, res, next) {
  CookPlan.findOne({
    where: {
      id : req.params.id,
      UserId: req.currentUserId
    }
  })
  .then((result) => {
    if(result) {
      next()
    }
    else{
      res.status(401).json({ message: 'Not Authorized' })
    }
  })
  .catch((err) => {
    res.status(401).json({ message: 'Not Authorized' })
  })
}

module.exports = authorization