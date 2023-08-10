const userSchema = require('../Models/user.Model')
const tokenService = require('../Services/token.Service')
const bcrypt = require('bcrypt')
const roleModel = require('../Models/role.Model')

const loginHelper = async (req, res) => {
    const user = await userSchema.findOne({email: req.body.email})
    if(!user) return res.status(400).json({error: 'Incorrect email'})
    // check if password matches
    const validPassword = await bcrypt.compare(req.body.password, user.password)
    if(!validPassword) return res.status(400).json({error: 'Password is incorrent'})
    let tokenData = {user_id : user._id, role : user.role}
    const jwtToken = await tokenService.createNewToken(tokenData)
    // sent user-token in header
    console.log('log 1')
    res.header('Authorization', 'Bearer '+jwtToken)
    res.status(200)
    .json({user:user})
}

const signupHelper = async (req, res) => {
    // check email duplicacy
    const emailExists = await userSchema.findByEmail(req.body.email)
    if(emailExists) {
        res.status(401).json({error:'Email already Exists'})
        return
    }
    // hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(req.body.password, salt)
    req.body.password = hashedPassword
    // createNewUser
    const newUser = await createNewUser(req.body)
    // generate new token
    let tokenData = {_id : newUser._id, role_id : newUser.role_id}
    const userToken = await tokenService.createNewToken(tokenData)
    let userData = {
        first_name : newUser.first_name,
        last_name : newUser.last_name,
        role : newUser.role
    }
    console.log('log 2')
    res.header('Authorization', 'Bearer '+userToken)
    res.status(200)
    .json(userData)
    return
    // res.status(200).json({user:newUser, token: userToken})
}

const createNewUser = async (userData) => {
    if(!userData.roleName) {
        var roleName = 'reader'
    } else {
        var roleName = userData.role
    }
    // get role_id of user
    const roleData = await roleModel.findByName(roleName)
    console.log(roleData)
    const user = new userSchema({
        first_name : userData.first_name,
        last_name : userData.last_name ?? '',
        email : userData.email,
        password: userData.password,
        role_id : roleData._id,
        role : roleData.role_name
    })
    // save user in db
    return await user.save()
}

module.exports = {
    loginHelper,
    signupHelper,
    createNewUser
}