import * as mongoose from 'mongoose'
import { requireFolder } from 'folder-utils'
import * as path from 'path'

export interface Repository {
  _disconnect: () => Promise<void>;
  _clear: () => Promise<void>;
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function MongooseRepository (modelsPath: string, options?: mongoose.ConnectionOptions) {
  mongoose.set('debug', 'true')

  requireFolder(path.join(process.cwd(), 'src/repositories', modelsPath), '-model', { mode: process.env.NODE_ENV === 'production' ? 'js' : 'ts', inject: mongoose })

  mongoose
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    .connect(process.env.MONGO_URI!, options)
    .catch(err => console.log(err))

  return {
    _disconnect: async () => mongoose.disconnect(),
    _clear: async () => mongoose.connection.dropDatabase(),
    models: mongoose.models
  }
}
