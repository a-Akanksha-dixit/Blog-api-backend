const jwt = require('jsonwebtoken')
const roleModel = require('../Models/role.Model')
const tokenModel = require('../Models/token.Model')
const userModel = require('../Models/user.Model')

const authentication = async (req, res, next) => {
    console.log('log 3')
    const authHeader = req.headers.authorization
    if(authHeader) {
        const token = authHeader.split(' ')[1]
        if(token) {
            let decoded = await jwt.verify(token, process.env.TOKEN_SECRET)
            if(decoded.token_id) {
                /** check if token is in db */
                const token_data = await tokenModel.findById(decoded.token_id) 
                if(token_data && token_data.role_id == decoded.role_id) {
                    /** query user :- role_id, user_id */
                    const user_data = await userModel.findByRole(token_data.user_id, token_data.role_id)
                    if(user_data) {
                        req.decoded = user_data
                        console.log('role ',req.decoded.role)
                        next()
                    } else {
                        res.status(400).json({error:'token_userr_not_found'})
                    }
                } else {
                    res.status(400).json({error:'token_not_found'})
                }
            } else {
                res.status(400).json({error:'token malformed'})
            }
        } else {
            res.status(400).json({error:'token_required'})
        }
    } else {
        res.status(400).json({error:'token_required'})
    }
    return
}

module.exports = authentication