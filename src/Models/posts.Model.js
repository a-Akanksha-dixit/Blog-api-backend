const mongoose = require('mongoose')
const {ObjectId, String, Array, Date, Boolean} = mongoose.Types

const postSchema = mongoose.Schema({
    blog_author_id :{
        type : ObjectId,
        required: true
    },
    content_group_id :{
        type : ObjectId
    },
    is_draft : {
        type : Boolean,
        default : false
    },
    keywords :{
        type : Array
    },
    meta_description :{
        type : String
    },
    name :{
        type : String,
        required: true
    },
    post_body :{
        type : String,
        required: true
    },
    post_summary :{
        type : String,
    },
    publish_date :{
        type : Date,
    },
    url : {
        type : String,
        default : this.title
    },
    topic_ids : {
        type : Array,
        default : []
    },
    created_at :{
        type : Date,
        default : Date.now
    },
    updated_At : {
        type : Date,
        default : Date.now
    },
    archived_at :{
        type:Date
    }
})

module.exports = mongoose.Model('posts', postSchema)