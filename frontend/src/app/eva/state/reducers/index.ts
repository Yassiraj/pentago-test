import { createReducer, on } from '@ngrx/store';
import * as EvaActions from '../actions'

export const FeatureKey = 'eva';

export interface Item {
    firstName?: string;
    lastName?: string;
    dateBirth?: string;
    phone?: string;
    email?: string;
}

export interface Loaders {
    new: boolean;
    collection: boolean;
}

export interface EvaState {
    collection: Item[];
    loaders: Loaders;
}

export const InitialEvaState: EvaState = {
    collection: [],
    loaders: { new: false, collection: false }
};

export const EvaReducer = createReducer(
    InitialEvaState,
    on(EvaActions.LoadItemCollection, state=>({...state, loaders: {...state.loaders, collection: true}})),
    on(EvaActions.LoadItemCollectionSuccess, (state, {collection}) => ({ ...state, collection, loaders: {...state.loaders, collection: false} })),
    on(EvaActions.LoadItemCollectionFailed, (state, {error}) => ({ ...state, loaders: {...state.loaders, collection: false} })),
    on(EvaActions.NewItemSubmited, state=>({...state, loaders: {...state.loaders, new: true}})),
    on(EvaActions.NewItemSubmissionSuccess, (state) => ({ ...state, loaders: {...state.loaders, new: false} })),
    on(EvaActions.NewItemSubmissionFailed, (state, {error}) => ({ ...state, loaders: {...state.loaders, new: false} }))
);
