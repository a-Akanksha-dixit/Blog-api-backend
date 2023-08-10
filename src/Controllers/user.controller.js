const {loginSchema, signupSchema} = require('../Services/validation.service')
const {loginHelper, signupHelper} = require('../Components/user.component')
const jwt = require('jsonwebtoken')

const login = async (req, res) => {
    // validate payload
    try {
        const {error} = await loginSchema.validateAsync(req.body)
        if(error) return res.status(400).json(error.details[0].message)
    } catch(error) {
        if(error) return res.status(400).json(error.details[0].message)
    }
    return loginHelper(req, res)
}
const register = async(req, res) => {
    const {error} = await signupSchema.validateAsync(req.body)
    return signupHelper(req, res)
}
module.exports = {
    login,
    register
}