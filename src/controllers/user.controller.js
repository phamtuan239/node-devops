const User = require('../models/User')

exports.registerHandler = async (req, res) => {
  try {
    await User.create(req.body)
    res.status(201).send({ success: true })
  } catch (error) {
    res.status(400).send({ error: error.message })
  }
}

exports.loginHandler = async (req, res) => {
  try {
    const { email, password } = req.body
    const user = await User.findOne({ email })
    if (!user) {
      return res.status(401).send({ error: 'Email not found' })
    }
    const isMatch = await user.compare(password)
    if (!isMatch) {
      return res.status(401).send({ error: 'Password not match' })
    }
    res.status(200).send({ success: true, user })
  } catch (error) {
    res.status(400).send({ error: error.message })
  }
}
