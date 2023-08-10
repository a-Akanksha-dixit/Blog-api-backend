const tokenService = require('../Services/token.Service')

const createToken = async (req, res) => {
    
    // create new token
    const userToken = await tokenService.createNewToken('123')
    console.log(userToken,'complete');
    res.status(200).send({msg:"reached"})
}

module.exports = {createToken}