const joi = require('@hapi/joi')

// signup validator schema
const signupSchema = joi.object({
    first_name: joi.string().min(3).required(),
    email: joi.string().min(5).email().required(),
    password: joi.string().min(3).required(),
    last_name: joi.string()
})
// login validator schema
const loginSchema = joi.object({
    email : joi.string().min(6).required().email(),
    password : joi.string().required()
})

module.exports = {loginSchema, signupSchema}