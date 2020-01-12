import { Mongoose, Document, Model } from 'mongoose'

export interface User extends Document {
  uid: string;
  email: string;
}

export type UserModel = Model<User>

module.exports = (mongoose: Mongoose): UserModel => {
  const { Schema, model } = mongoose

  const schema = {
    uid: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    }
  }
  const userSchema = new Schema(schema, { timestamps: true })

  userSchema.index({ uid: 'text' }, { unique: true })

  return model('User', userSchema)
}
