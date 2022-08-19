const { Router } = require('express')
const {
  registerHandler,
  loginHandler
} = require('../controllers/user.controller')

const userRouter = Router()

userRouter.post('/api/auth/register', registerHandler)
userRouter.post('/api/auth/login', loginHandler)

module.exports = userRouter
