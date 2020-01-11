import { app } from 'graphql-api-scripts'

let instance

beforeAll(() => {
  instance = app.listen()
  return instance
})

afterAll(async () => {
  return instance.close()
})
