const router = require('express').Router()

const {createTokenByRole} = require('../Controllers/token.controller')

router.route('/get-token').get(createTokenByRole)

module.exports = router