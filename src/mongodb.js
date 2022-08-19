const mongoose = require('mongoose')
const mongodbConf = require('./config/mongodb')

mongoose
  .connect(
    `mongodb://${mongodbConf.username}:${mongodbConf.password}@${mongodbConf.host}:${mongodbConf.port}/devops-node?authSource=admin`
  )
  .then(() => {
    console.log('Connected to MongoDB')
  })
  .catch((err) => {
    console.log(err.message)
  })
