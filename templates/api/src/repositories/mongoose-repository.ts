import MongooseRepository, { Repository } from '../plugins/mongoose-repository-plugin'
import { UserModel } from './mongoose/user-model'

export interface MongooseModels extends Repository {
  models: {
    User: UserModel;
  };
}

export default MongooseRepository('mongoose', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
})
