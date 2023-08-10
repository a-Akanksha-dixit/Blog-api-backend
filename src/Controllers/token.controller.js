const jwt = require('jsonwebtoken')
const {createNewToken} = require('../Services/token.Service')
const roleModel = require('../Models/role.Model')
const userModel = require('../Models/user.Model')

/** token generator for admin anonymous */
const createTokenByRole = async (req, res) => {
    if(token_type = req.query.token_type) {
        const roleData = await roleModel.findByName(token_type)
        // console.log(roleData)
        // const roles = await roleModel.find({})
        // console.log(roles)
        // res.status(400).json({error:'sf'})
        // return
        if(roleData) {
            /** get user by role:- for admin, anonymous */
            const user_data = await userModel.findOne({role_id : roleData._id})
            if(user_data) {
                let tokenData = {
                    role_id : roleData._id,
                    user_id : user_data._id
                }
                let token = await createNewToken(tokenData, token_type == 'admin')
                res.status(200).json({token:token, role:token_type})
                return
            } else {
                res.status(400).json({error:'token_user_not_found'})
            }
        } else {
            res.status(400).json({error:'role not foundd'})
        }
    } else {
        res.status(400).json({error:'token_type is required'})
    }
    return
}

module.exports = {createTokenByRole}