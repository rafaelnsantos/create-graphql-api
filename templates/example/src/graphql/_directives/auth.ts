import { Context } from '../../generated/types'
import { CODES } from '../../errors'
import { Next } from 'graphql-api-scripts'
import { Role } from '../../generated/schema'

interface Requires {
  roles: [Role];
}

export default {
  async auth (next: Next, _, { roles }: Requires, context: Context): Promise<void> {
    const { token, utils, repositories } = context
    if (!token) throw new Error(CODES.UNAUTHENTICATED)

    const _id = await utils.auth.verifyTokenAndGetUserFromCache(token)

    if (roles) {
      const userRole = await utils.cache.getOrCache<Role>(_id, async () => {
        const user = await repositories.mongoose.User.findById(_id, { role: 1 })
        return user.role
      })
      if (!userRole || !roles.includes(userRole)) throw new Error(CODES.UNAUTHORIZED)
    }

    context.user = _id

    if (!context.user) throw new Error(CODES.UNAUTHENTICATED)

    return next()
  }
}
