import { UtilProps } from '../generated/types'

export interface CacheUtil {
  getOrCache: <T>(key: string, getFunction: () => Promise<string>) => Promise<T>;
}

export default ({ repositories }: UtilProps): CacheUtil => {
  const { redis } = repositories
  return {
    getOrCache: async (key, getFunction) => {
      let value: any = await redis.get(key)

      if (!value) {
        value = await getFunction()
        await redis.set(key, value)
      }
      return value
    }
  }
}
