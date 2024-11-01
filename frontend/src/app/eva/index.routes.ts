import { Routes } from '@angular/router';

import { EvaFeature } from './state';
import { provideState } from '@ngrx/store';
import { EvaEffects } from './state/effects';
import { provideEffects } from '@ngrx/effects';

import { CollectionComponent } from './components/collection/collection.component';


export const routes: Routes = [
  {
    path: '',
    providers: [
      provideState(EvaFeature.name,EvaFeature.reducer),
      provideEffects(EvaEffects),
    ],
    component: CollectionComponent
  },
];
