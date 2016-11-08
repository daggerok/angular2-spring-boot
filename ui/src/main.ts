import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';

import { AppModule } from './app';

if ('production' === process.env.NODE_ENV) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
