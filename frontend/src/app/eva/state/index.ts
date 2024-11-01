import { createFeature } from '@ngrx/store';
import { FeatureKey, EvaReducer } from './reducers';

export const EvaFeature = createFeature(
  {
    name: FeatureKey,
    reducer: EvaReducer,
  })

export * from './actions';
export * from './effects';
export * from './reducers';
export * from './selectors';
