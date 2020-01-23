import * as request from 'supertest'
import { app } from 'graphql-api-scripts'

global.request = (query, token) => token ? request(app).post('/graphql').set('token', token).send(query) : request(app).post('/graphql').send(query)
