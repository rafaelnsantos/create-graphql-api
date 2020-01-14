import { UserModel } from './mongoose/user-model'
import { Repository } from 'graphql-api-scripts'
import { MongooseRepository } from 'mongoose-repository-plugin'

export interface MongooseRepository extends Repository {
  User: UserModel;
}

export default MongooseRepository('mongoose', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
})
