import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {FormlyModule} from '@ngx-formly/core';
import {FormlyMaterialModule} from '@ngx-formly/material';
import {AutocompleteTypeComponent} from 'projects/vendors/src/lib/formly-type-components/autocomplete-type.component';
import { FormlyWrapperComponent } from './formly-wrapper.component';

@NgModule({
  declarations: [FormlyWrapperComponent, AutocompleteTypeComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatAutocompleteModule,
    MatCardModule,
    FormlyMaterialModule,
    FormlyModule.forRoot({
      types: [{
        name: 'autocomplete',
        component: AutocompleteTypeComponent,
        wrappers: ['form-field'],
      }],
      validationMessages: [
        { name: 'required', message: 'Required' }
      ],
    }),
  ],
  exports: [
    FormlyWrapperComponent
  ]
})
export class FormlyWrapperModule { }
