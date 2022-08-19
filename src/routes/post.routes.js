const { Router } = require('express')
const { createPostHandler } = require('../controllers/post.controller')

const postRouter = Router()

postRouter.post('/api/post', createPostHandler)

module.exports = postRouter
