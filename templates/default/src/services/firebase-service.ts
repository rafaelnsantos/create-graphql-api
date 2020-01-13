/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-var-requires */
import { CODES } from '../errors'

export interface FirebaseService {
  verifyIdToken: (token: string) => Promise<({
    uid: string;
    email: string;
  })>;
}
function FirebaseService (): FirebaseService {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  if (process.env.NODE_ENV.includes('test') || process.env.NODE_ENV.includes('travis')) {
    const jwt = require('jsonwebtoken')
    return {
      verifyIdToken: async (token: string) => {
        const { uid, email } = await jwt.verify(token, 'sh')
        return { uid, email }
      }
    }
  } else {
    const admin = require('firebase-admin')
    admin.initializeApp({
      credential: admin.credential.cert({
        type: 'service_account',
        project_id: process.env.FIREBASE_PROJECT_ID,
        private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID,
        private_key: process.env.FIREBASE_PRIVATE_KEY,
        client_email: process.env.FIREBASE_CLIENT_EMAIL,
        client_id: process.env.FIREBASE_CLIENT_ID,
        auth_uri: 'https://accounts.google.com/o/oauth2/auth',
        token_uri: 'https://oauth2.googleapis.com/token',
        auth_provider_x509_cert_url:
      'https://www.googleapis.com/oauth2/v1/certs',
        client_x509_cert_url: process.env.FIREBASE_CLIENT_X509_CERT_URL
      })
    })
    return {
      verifyIdToken: async function (token: string) {
        try {
          const { uid, email } = await admin.auth().verifyIdToken(token)
          return { uid, email }
        } catch (err) {
          if (err.code === 'auth/argument-error') throw new Error(CODES.INVALID_TOKEN)

          if (err.code === 'auth/id-token-expired') throw new Error(CODES.EXPIRED_TOKEN)

          throw err
        }
      }
    }
  }
}

export default FirebaseService()
