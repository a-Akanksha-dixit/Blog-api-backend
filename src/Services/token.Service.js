const jwt = require('jsonwebtoken')
const tokenModel = require('../Models/token.Model')

const createNewToken = async (tokenData, isAdmin = false) => {
    //save token in db
    if(!isAdmin) {
        const currentDate = new Date();
        currentDate.setHours(currentDate.getHours() + 1);
        tokenData.expires_at = currentDate
    }
    newToken = await saveNewToken(tokenData)
    tokenData = {
        token_id : newToken._id,
        token_type : newToken.token_type,
        role_id : newToken.role_id,
        issued_by : 'ced'
    }
    if(newToken.user_id) {
        tokenData.user_id = newToken.user_id
    }
    if(isAdmin) {
        /** admin token will not expire */
        var token = await jwt.sign(tokenData,
            process.env.TOKEN_SECRET
        )
    } else {
        // sign token by jwt
        var token = jwt.sign(tokenData,
            process.env.TOKEN_SECRET,
            {expiresIn : '1h'}
        )
    }
    return token
}

const saveNewToken = async (token_data) => {
    const saveToken = await new tokenModel(token_data).save()
    return saveToken
}

const validateToken = (req, res, next) => {
    console.log('log 4')
    const authHeader = req.headers.authorization
    if(authHeader) {
        const token = authHeader.split(' ')[1]
        if(!token) {
            return {error:'access_forbidden'}
        }
        req.decoded = jwt.verify(token, process.env.TOKEN_SECRET)
        console.log(req.decoded);
        next()
        // to-do, verify token validity from db
        // console.log('decoded ',decoded)
    } else {
        return {error:'token_required'}
    }
}

const createGrantlessToken = async (tokenDetails) => {
    // generate new refresh token
    return await jwt.sign({tokenDetails}, process.env.TOKEN_SECRET, {expiresIn : '1h'})
}

module.exports = {
    createNewToken,
    validateToken,
    createGrantlessToken
}

