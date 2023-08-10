const mongoose = require('mongoose')
const { Schema } = mongoose; 

const userSchema = new Schema({
    first_name : {
        type:String,
        required:true
    },
    last_name : {
        type:String
    },
    email : {
        type:String,
        required: true,
        unique: true
    },
    password:{
        type:String,
        required:true
    },
    role: {
        type: String,
        default : 'reader'
    },
    role_id: {
        type: Schema.Types.ObjectId,
        ref : 'acl_role'
    },
    accounts : {
        type: Array,
    },
    created_at: {
        type: Date,
        default : Date.now()
    }
})

userSchema.statics.findByEmail = function(email) {
    return this.findOne({email:email})
}

userSchema.statics.findByRole = function(user_id, role_id) {
    return this.findOne({_id : user_id, role_id : role_id})
}


module.exports = mongoose.model('user_details', userSchema)