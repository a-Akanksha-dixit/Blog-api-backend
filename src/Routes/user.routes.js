const router = require('express').Router()

// const router = express.Router()

const {login, register} = require('../Controllers/user.controller')

router.route('/login').post(login)

router.route('/register').post(register)

module.exports = router