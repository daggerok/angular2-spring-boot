import { publicPath } from '../output.config.babel';

export default env => ({ baseHref: publicPath(env), });
