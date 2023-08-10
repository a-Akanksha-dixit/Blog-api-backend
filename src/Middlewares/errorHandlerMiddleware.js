
const errorHandlerMiddleware = async (err, req, res, next) => {

    if(err.details != undefined) {
        err.message = err.details[0].message
    } else if(!err.message) {
        err.message = 'Something went wrong, please try again'
    }
    console.log(err)
    res.status(err.errorCode ?? 400).json({error: err.message})
    return
}

module.exports = errorHandlerMiddleware