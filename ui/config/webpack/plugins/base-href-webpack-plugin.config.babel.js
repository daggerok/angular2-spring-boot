import { publicPath } from '../utils.babel';

export default env => ({ baseHref: publicPath(env), });
