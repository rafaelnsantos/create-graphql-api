# Cron tasks folder

every file with suffix -cron.ts have Cron injected to the default function.

example:

```ts
import { Cron } from '../generated/types'

export default ({ schedule, repositories, services, utils }: Cron): void => {
  schedule('* * * * *', () => {
    console.log('this runs every minute')
  })
}
```
