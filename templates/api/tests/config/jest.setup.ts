import { app, repositories } from 'graphql-api-scripts'
import { Repositories } from '../../src/repositories/repositories'

const { mongoose }: Repositories = repositories

let instance

beforeAll(() => {
  instance = app.listen()
  return instance
})

afterAll(async () => {
  await mongoose._disconnect()
  return instance.close()
})
