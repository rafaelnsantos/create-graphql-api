import { FirebaseService } from 'firebase-service-plugin'

export default FirebaseService(() => {
  // mock used functions
  let mockAuth: any
  return {
    auth: {
      verifyIdToken: async (token, checkRevoked) => {
        const { uid, email } = JSON.parse(token)
        return {
          uid,
          email
        }
      }
    },
    ...mockAuth
  }
})
