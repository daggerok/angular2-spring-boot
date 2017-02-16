import rucksack from 'rucksack-css';
import precss from 'precss';

const AUTOPREFIXER_BROWSERS = [
  'last 4 versions',
  'Android 2.3',
  'Android >= 4',
  'Chrome >= 35',
  'Firefox >= 28',
  'Explorer >= 9',
  'ie >= 9',
  'iOS >= 7',
  'Opera >= 12',
  'Safari >= 7.1',
];

export default [
  precss,
  rucksack({
    fallbacks: true,
    autoprefixer: {
      browsers: AUTOPREFIXER_BROWSERS,
    },
  }),
];
