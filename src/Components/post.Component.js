const postsModel = require('../Models/posts.Model')

const queryPosts = (req) => {
    const {bool, param, name, numericFilter} = req.query
    const queryObject = {}
    if(bool) queryObject.featured = featured == 'true'
    if(param) queryObject.query2 = query2
    if(name) queryObject.name = {$regex : name, $options : 'i'}
    // if(numericFilter) {
    //     const operationMap = {
    //         '>' : '$gt',
    //         '>=' : '$gte',
    //         '<' : '$lt',
    //         '<=' : '$lte',
    //         '=' : '$eq',
    //     }
    //     const regEx = /\b(<|>|<=|>=|=)\b/g
    //     let filters = numericFilter.replace(regEx, (match) => `-${operationMap[match]}-`)
    //     const options = ['price', 'rating']
    //     filters = filters.split(',').forEach((item) => {
    //         const [field, operator, value] = item.split('-')
    //         if(options.includes(field)) {
    //             queryObject[field] = {[operator] : Number(value)}
    //         }
    //     })
    //     // console.log(queryObject);
    // }

    // if(fields) {
    //     const fieldList = fields.split(',').join(' ')
    //     result = result.select(fieldList)
    // }
    return postsModel.find(queryObject)
}

module.exports = {queryPosts}