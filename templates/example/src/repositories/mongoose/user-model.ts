import { Mongoose, Document, Model } from 'mongoose'
import { Role } from '../../generated/schema'

export interface User extends Document {
  uid: string;
  email: string;
  role: Role;
}

export type UserModel = Model<User>

export default ({ Schema, model }: Mongoose): UserModel => {
  const schema = new Schema<UserModel>({
    uid: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    role: {
      type: String,
      enum: [Role.Admin, Role.Manager]
    }
  }, { timestamps: true })

  schema.index({ uid: 'text' }, { unique: true })

  return model('User', schema)
}
