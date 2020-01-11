// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Test } from 'supertest'

export {}

declare global {
  namespace NodeJS {
    interface Global {
      request: () => Test;
    }
  }
}
