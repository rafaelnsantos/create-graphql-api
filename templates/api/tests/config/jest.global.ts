import * as request from 'supertest'
import { app } from 'graphql-api-scripts'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
global.request = () => request(app).post('/graphql')
