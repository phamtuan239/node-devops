module.exports = {
  host: process.env.MONGO_HOST || 'mongodb',
  port: process.env.MONGO_PORT || 27017,
  username: process.env.MONGO_USERNAME,
  password: process.env.MONGO_PASSWORD
}
