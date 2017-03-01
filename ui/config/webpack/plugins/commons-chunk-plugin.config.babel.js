import { suffix } from '../output.config.babel';

export default {
  name: 'vendors',
  filename: `[name].js?${suffix}`
};
