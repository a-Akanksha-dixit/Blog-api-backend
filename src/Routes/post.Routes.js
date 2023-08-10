const router = require('express').Router()

const {getAllPosts} = require('../Controllers/post.Controller')

router.route('/blog-posts').get(getAllPosts)

module.exports = router