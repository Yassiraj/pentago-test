import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, type OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { TAIGA_UI_MODULES } from 'app/@taiga-modules';
import { Item, NewItemSubmited, selectNewItemLoader } from 'app/eva/state';

@Component({
    selector: 'app-new-form',
    standalone: true,
    imports: [
        CommonModule,
        ...TAIGA_UI_MODULES,
        ReactiveFormsModule
    ],
    templateUrl: './new.component.html',
    styleUrl: './new.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewComponent implements OnInit {

    store$ = inject(Store)
    fb: FormBuilder = inject(FormBuilder)

    savingLoaders$ = this.store$.select(selectNewItemLoader)

    form = this.fb.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        dateBirth: [null, Validators.required],
        phone: ['', [Validators.required,Validators.minLength(12)]],
        email: ['', [Validators.required,Validators.email]]
    });

    saveUser() {
        if (this.form.valid){
            this.store$.dispatch(NewItemSubmited({item: this.form.value as Item}))
            this.form.reset()
            return;
        }
        else{
            this.form.markAllAsTouched();
        }
    }
    
    ngOnInit(): void { }

}
