/**
 * @license
 * Copyright daggerok. All rights reserved.
 *
 * Use of this source code is governed by a ISC-style license
 * that can be found in the LICENSE file. at https://github.com/daggerok/angular2/LICENSE
 */
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';

import { AppModule } from './app';

if ('production' === process.env.NODE_ENV) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule);
