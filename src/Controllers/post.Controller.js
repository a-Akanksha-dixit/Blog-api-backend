const postHelper = require('../Components/post.Component')

const getAllPosts = async (req, res) => {
    const posts = postHelper.queryPosts(req)
    return res.status(200).json({success:true, response:posts})
    return
}

module.exports = {
    getAllPosts
}