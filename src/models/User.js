const { Schema, model } = require('mongoose')
const { hash, compare } = require('bcrypt')

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true,
    toJSON: {
      transform: (doc, ret) => {
        delete ret.password
      }
    }
  }
)

userSchema.methods.compare = async function (password) {
  const user = this
  return await compare(password, user.password)
}

userSchema.pre('save', async function (next) {
  const user = this
  if (user.isModified('password')) {
    user.password = await hash(user.password, 8)
  }
  next()
})

const User = model('User', userSchema)

module.exports = User
