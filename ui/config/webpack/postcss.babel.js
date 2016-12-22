import cssnano from 'cssnano';
import autoprefixer from 'autoprefixer';

export default [
  autoprefixer({ browsers: 'last 4 versions' }),
  cssnano
];
