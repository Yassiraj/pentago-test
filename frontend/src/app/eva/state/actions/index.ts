import { createAction, props } from '@ngrx/store';
import { Item } from '../reducers';

export enum ActionTypes {
    LoadItemCollection          = '[Eva Feature] load list',
    LoadItemCollectionSuccess   = '[Eva Feature] list loaded',
    LoadItemCollectionFailed    = '[Eva Feature] list failed',
    NewItemSubmited             = '[Eva Feature] new item submited',
    NewItemSubmissionSuccess    = '[Eva Feature] countries list loaded',
    NewItemSubmissionFailed     = '[Eva Feature] countries list failed',

}

export const LoadItemCollection         = createAction(ActionTypes.LoadItemCollection);
export const LoadItemCollectionSuccess  = createAction(ActionTypes.LoadItemCollectionSuccess, props<{ collection: Item[] }>());
export const LoadItemCollectionFailed   = createAction(ActionTypes.LoadItemCollectionFailed, props<{ error: any }>());

export const NewItemSubmited           = createAction(ActionTypes.NewItemSubmited, props<{ item: Item }>());
export const NewItemSubmissionSuccess  = createAction(ActionTypes.NewItemSubmissionSuccess);
export const NewItemSubmissionFailed   = createAction(ActionTypes.NewItemSubmissionFailed, props<{ error: any }>());
