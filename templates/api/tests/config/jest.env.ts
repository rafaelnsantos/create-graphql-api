import * as dotenv from 'dotenv'
import { generateTypes } from 'graphql-api-scripts'

generateTypes()

if (process.env.NODE_ENV === 'test') {
  dotenv.config({ path: './.env.test' })
} else {
  dotenv.config({ path: './.env.travis' })
}
