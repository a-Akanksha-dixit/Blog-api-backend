const mongoose = require('mongoose')
const { Schema } = mongoose; 

const tokenSchema = new Schema({
    token_type : {
        type:String,
        default : 'app'
    },
    user_id : {
        type: Schema.Types.ObjectId,
        ref : 'user_details'
    },
    role_id:{
        type: Schema.Types.ObjectId,
        ref : 'acl_role'
        // type : String,
        // default : 'anonymous'
    },
    expires_at : {
        type : Date
    }
})

tokenSchema.methods.findById = function(token_id) {
    return this.findOne({_id : token_id})
}

module.exports = mongoose.model('token_manager', tokenSchema)