import { Context } from '../../generated/types'
import { CODES } from '../../errors'
import { Next } from 'graphql-api-scripts'

export default {
  async auth (next: Next, _, requires, context: Context): Promise<void> {
    const { token, utils } = context

    if (!token) throw new Error(CODES.UNAUTHENTICATED)

    const _id = await utils.auth.verifyTokenAndGetUserFromCache(token)

    context.user = _id

    if (!context.user) throw new Error(CODES.UNAUTHENTICATED)

    return next()
  }
}
