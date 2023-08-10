const router = require('express').Router()
const { createToken } = require('./token.Component')
const {test} = require('./test.controller')




router.route('/createToken').post(createToken)
router.route('/test').get(test)

module.exports = router