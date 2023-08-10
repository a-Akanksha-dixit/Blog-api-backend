const mongoose = require('mongoose')

const roleSchema = new mongoose.Schema({
    role_name : {
        type:String,
        required:true
    },
    created_at : {
        type: Date,
        default : new Date()
    }
})

// Add the static method 'findByName' to the schema
roleSchema.statics.findByName = function(name) {
    // return this.find({ role_name: new RegExp(name, 'i') });
    return this.findOne({role_name:name})
};

roleSchema.statics.findById = function(role_id) {
    return this.findOne({_id : role_id})
}
  

module.exports = mongoose.model('acl_role', roleSchema)