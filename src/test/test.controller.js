const roleModel = require('../Models/role.Model')
const test = async (req, res) => {
    console.log('heree')
    // create new token
    // const role = await roleModel.findByName('reader')

    // console.log(role[0]._id)
  // Get the current date and time


// Add one hour to the current date and time
// currentDate.setHours(currentDate.getHours() + 1);

// // Now currentDate holds the date and time one hour from now
// console.log("Current Date and Time:", new Date());
// console.log("Date and Time One Hour from Now:", currentDate);
    // const newrole =await new  roleModel({role_name:"myname"}).save()
    
    // console.log(newrole)
    res.status(200).send({msg:'complete'})
    // const userToken = tokenService.createNewToken()
}

module.exports = {test}