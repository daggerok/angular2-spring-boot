import { exclude } from './module.config.babel';

export default {
  ignored: [
    exclude,
    '**/*.js'
  ],
  poll: 1000,
  aggregateTimeout: 300,
};
