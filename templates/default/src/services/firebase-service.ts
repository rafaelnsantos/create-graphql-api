import { FirebaseService } from 'firebase-service-plugin'

export default FirebaseService(() => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const jwt = require('jsonwebtoken')
  // mock used functions
  let mockAuth: any
  return {
    auth: {
      verifyIdToken: async (token, checkRevoked) => {
        const { uid, email } = await jwt.verify(token, 'test')
        const mockRes: any = {
          uid,
          email
        }
        return mockRes
      }
    },
    ...mockAuth
  }
})
