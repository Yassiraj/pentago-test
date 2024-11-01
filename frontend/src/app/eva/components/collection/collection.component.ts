import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, type OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { LoadItemCollection, selectCollection, selectCollectionLoader } from 'app/eva/state';
import { NewComponent } from '../new/new.component';
import { TAIGA_UI_MODULES } from 'app/@taiga-modules';

@Component({
    selector: 'app-collection',
    standalone: true,
    imports: [
        CommonModule,
        NewComponent,
        ...TAIGA_UI_MODULES
    ],
    templateUrl: './collection.component.html',
    styleUrl: './collection.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CollectionComponent implements OnInit {

    store$ = inject(Store)

    collection$ = this.store$.select(selectCollection)
    collectionLoaders$ = this.store$.select(selectCollectionLoader)

    ngOnInit(): void {
        this.store$.dispatch(LoadItemCollection())
    }

}
