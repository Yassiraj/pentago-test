import { Injectable } from "@angular/core";

import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap, tap } from "rxjs";
import * as EvaActions from '../actions'

import { EvaService } from "../../services/index.service";
import { Store } from "@ngrx/store";

@Injectable()
export class EvaEffects {

    loadCollection = createEffect(() =>
        this.actions$.pipe(
            ofType(EvaActions.LoadItemCollection),
            switchMap(() =>
                this.evaService.getItemCollection().pipe(
                    map(collection => EvaActions.LoadItemCollectionSuccess({ collection })),
                    catchError(error => of(EvaActions.LoadItemCollectionFailed({ error })))
                )
            )
        )
    )

    newItem = createEffect(() =>
        this.actions$.pipe(
            ofType(EvaActions.NewItemSubmited),
            switchMap(({item: newItem}) =>
                this.evaService.postNewItem(newItem).pipe(
                    map(collection => EvaActions.NewItemSubmissionSuccess()),
                    catchError(error => of(EvaActions.NewItemSubmissionFailed({ error })))
                )
            )
        )
    )

    newItemSuccess = createEffect(() =>
        this.actions$.pipe(
            ofType(EvaActions.NewItemSubmissionSuccess),
            tap(()=>{
                this.store$.dispatch(EvaActions.LoadItemCollection())
            })
        ),
        {dispatch: false}
    )
      
    constructor(
        private actions$: Actions,
        private store$: Store,
        private evaService: EvaService
    ) { }
}