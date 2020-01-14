import { app } from 'graphql-api-scripts'
import { Server } from 'http'

let instance: Server

beforeAll(done => {
  instance = app.listen(done)
})

afterAll(async done => {
  instance.close(done)
})
