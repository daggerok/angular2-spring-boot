import { suffix } from '../output.babel';

export default {
  name: 'vendors',
  filename: `[name].js?${suffix}`
};
