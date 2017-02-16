import { exclude } from './module.babel';

export default {
  ignored: [
    exclude,
    '**/*.js'
  ],
  poll: 1000,
  aggregateTimeout: 300,
};
