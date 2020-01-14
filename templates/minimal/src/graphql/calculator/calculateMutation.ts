import { Input } from '../../generated/types'
import { Operation, CalculateInput, CalculatePayload } from '../../generated/schema'
import { Context } from '../../types'

export const resolver = {
  Mutation: {
    calculate: async (_, { input }: Input<CalculateInput>, context: Context): Promise<CalculatePayload> => {
      const { n1, n2 } = input
      let response = 0

      switch (input.operation) {
        case Operation.Sum:
          response = n1 + n2
          break

        case Operation.Subtract:
          response = n1 - n2
          break

        case Operation.Divide:
          response = n1 / n2
          break

        case Operation.Multiply:
          response = n1 * n2
          break
      }

      return {
        response
      }
    }
  }
}
