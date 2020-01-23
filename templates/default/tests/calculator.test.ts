import { createQuery } from 'graphql-api-scripts'
import { Operation, CalculateInput } from '~/generated/schema'

const query = createQuery<CalculateInput>(`
mutation ($input: CalculateInput!){
  payload: calculate(input: $input) {
    response
  }
}
`)

describe('mutation calculate', () => {
  const { request } = global

  it('deve realizar soma', () => {
    query.variables = {
      input: {
        n1: 10,
        operation: Operation.Sum,
        n2: 15
      }
    }
    return request(query)
      .expect(res => expect(res.body.data.payload.response).toBe(25))
  })

  it('deve realizar divisao', () => {
    query.variables = {
      input: {
        n1: 30,
        operation: Operation.Divide,
        n2: 15
      }
    }
    return request(query)
      .expect(res => expect(res.body.data.payload.response).toBe(2))
  })

  it('deve realizar subtracao', () => {
    query.variables = {
      input: {
        n1: 20,
        operation: Operation.Subtract,
        n2: 15
      }
    }
    return request(query)
      .expect(res => expect(res.body.data.payload.response).toBe(5))
  })

  it('deve realizar multiplicacao', () => {
    query.variables = {
      input: {
        n1: 10,
        operation: Operation.Multiply,
        n2: 15
      }
    }
    return request(query)
      .expect(res => expect(res.body.data.payload.response).toBe(150))
  })
})
