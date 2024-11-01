import { createFeatureSelector, createSelector } from "@ngrx/store";
import { EvaState, FeatureKey } from "../reducers";

export const EvaFeature = createFeatureSelector<EvaState>(FeatureKey);

export const selectCollection = createSelector(EvaFeature, (state: EvaState) => state.collection);

export const selectCollectionLoader = createSelector(EvaFeature, (state: EvaState) => state.loaders.collection);
export const selectNewItemLoader = createSelector(EvaFeature, (state: EvaState) => state.loaders.new);
