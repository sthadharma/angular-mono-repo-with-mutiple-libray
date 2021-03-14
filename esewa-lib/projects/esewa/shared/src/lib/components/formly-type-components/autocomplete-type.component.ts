// import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
// import { FieldType } from '@ngx-formly/material';
// import { MatInput } from '@angular/material/input';
// import { MatAutocompleteTrigger } from '@angular/material/autocomplete';
// import { Observable } from 'rxjs';
// import { startWith, switchMap } from 'rxjs/operators';
//
// @Component({
//     selector: 'lib-autocomplete-type',
//     template: `
//         <input matInput
//                [matAutocomplete]="auto"
//                [formControl]="formControl"
//                [formlyAttributes]="field"
//                [placeholder]="to.placeholder"
//                [errorStateMatcher]="errorStateMatcher">
//         <mat-autocomplete #auto="matAutocomplete">
//             <mat-option *ngFor="let value of filter | async" [value]="value">
//                 {{ value }}
//             </mat-option>
//         </mat-autocomplete>
//     `,
// })
// export class AutocompleteTypeComponent extends FieldType implements OnInit, AfterViewInit {
//     @ViewChild(MatInput) formFieldControl: MatInput;
//     @ViewChild(MatAutocompleteTrigger) autocomplete: MatAutocompleteTrigger;
//
//     filter: Observable<any>;
//
//     ngOnInit(): void {
//         super.ngOnInit();
//         console.log(this.to);
//         this.filter = this.formControl.valueChanges
//             .pipe(
//                 startWith(''),
//                 switchMap(term => this.to.filter(term)),
//             );
//     }
//
//     ngAfterViewInit(): void {
//         super.ngAfterViewInit();
//         // temporary fix for https://github.com/angular/material2/issues/6728
//         (<any> this.autocomplete)._formField = this.formField;
//     }
// }
//
//
// /**  Copyright 2018 Google Inc. All Rights Reserved.
//  Use of this source code is governed by an MIT-style license that
//  can be found in the LICENSE file at http://angular.io/license */
