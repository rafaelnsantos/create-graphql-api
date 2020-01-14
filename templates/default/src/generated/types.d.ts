import { Services } from '../services/services'
import { Repositories } from '../repositories/repositories'
import { Utils } from '../utils/utils'
import { ContextRequest } from 'graphql-api-scripts'

export interface Context extends ContextRequest<Repositories, Services, Utils> {
  user?: string;
}

export interface UtilProps {
  repositories: Repositories;
  services: Services;
}
