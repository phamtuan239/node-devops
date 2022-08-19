const app = require('./app')
const postRouter = require('./routes/post.routes')
const userRouter = require('./routes/user.routes')

require('./mongodb')

const PORT = process.env.PORT || 5000

app.get('/api/hello', (res, req) => {
  res.send({
    hello: 'Hello, World!'
  })
})
app.use(userRouter)
app.use(postRouter)

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
