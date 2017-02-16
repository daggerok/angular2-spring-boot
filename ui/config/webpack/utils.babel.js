import { resolve } from 'path';

export const pathTo = rel => resolve(process.cwd(), rel);
export const publicPath = env => env === 'ghpages' ? '/angular2/' : '/';
export const jsonEnv = env => JSON.stringify(env !== 'development' ? 'production' : env);
export const minimize = env => env !== 'development' ? '&minimize' : '';
