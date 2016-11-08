import { RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

export const AppRoutes = RouterModule.forRoot([
  {
    path: '',
    component: HomeComponent,
  },
]);
