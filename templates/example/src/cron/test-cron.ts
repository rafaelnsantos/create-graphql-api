import { Cron } from '../generated/types'

export default ({ schedule, repositories, services, utils }: Cron): void => {
  schedule('* * * * *', () => {
    console.log('this runs every minute')
  })
}
