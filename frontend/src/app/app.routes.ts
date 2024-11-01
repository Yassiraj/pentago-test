import { Routes } from '@angular/router';

export enum ROUTES {
    WORKSPACE = 'eva',
  }

export const routes: Routes = [
    { path: '', redirectTo: ROUTES.WORKSPACE, pathMatch: 'full' },
    { path: ROUTES.WORKSPACE, loadChildren: () => import('./eva/index.routes').then(m => m.routes) },
];
