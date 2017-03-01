import { pathTo } from '../utils.babel';

export default {
  tsConfigPath: pathTo('./src/tsconfig.json'),
  entryModule: pathTo('./src/app/app.module#AppModule'),
  mainPath: pathTo('./src/main.ts')
};
