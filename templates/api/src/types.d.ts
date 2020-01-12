import { Services } from './services/services'
import { Repositories } from './repositories/repositories'
import { Utils } from './utils/utils'

export interface Context {
  services: Services;
  repositories: Repositories;
  utils: Utils;
  token?: string;
  user?: string;
}
