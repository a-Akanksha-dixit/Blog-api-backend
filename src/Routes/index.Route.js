const router = require('express').Router();

const testingRoutes = require('../test/test.router')
const userRouter = require('./user.routes')

/** user routes */
router.use('/api/v1/user', userRouter)

/** testing routes */
router.use('/api/sandbox', testingRoutes)

/** admin role routes */
const grantlessRoute = require('./grantless.Route')
router.use('/api/v1', grantlessRoute)

/** blog-post routes */
const blogRoutes = require('./post.Routes')
router.use('/api/v1',blogRoutes)

module.exports = router