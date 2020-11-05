import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormlyFieldConfig} from '@ngx-formly/core';
import { ToolsService } from 'projects/tools/src/lib/tools.service';
import {Observable, of} from 'rxjs';


@Component({
  selector: 'lib-formly-wrapper',
  templateUrl: './formly-wrapper.component.html',
  styleUrls: ['./formly-wrapper.component.css']
})
export class FormlyWrapperComponent implements OnInit {
  @Input() 'product': string;

  constructor(
    private toolservice: ToolsService,
    ) {
  }

  form = new FormGroup({});
  model = {};
  fields: any;
  autoCompleteContents: Array<any> = [];
  purposeList: Array<any> = [];


  // autoCompleteContents: FormlyFieldConfig[] = [
  //   {
  //     key: 'Autocomplete',
  //     type: 'autocomplete',
  //     templateOptions: {s
  //       required: true,
  //       label: 'Autocomplete',
  //       placeholder: 'Placeholder',
  //       filter: (term) => of(term ? this.filterStates(term) : states.slice()),
  //     },
  //   },
  // ];

  autoCompleteFilter(queryString: string) {
    return this.autoCompleteContents.filter(data =>
      data.name.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
  }

  bankFilter(queryString: string) {
    return this.autoCompleteContents.filter(data =>
      data.bank_display_name.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
  }

  mapFields(fields: FormlyFieldConfig[]) {
    return fields.map(f => {
      if (f.key === 'code') {
        const filter = (term) => of(term ? this.autoCompleteFilter(term) : this.autoCompleteContents.slice());
        f.templateOptions = {...f.templateOptions, filter};
        this.toolservice.getJsonStructureForProduct('neaconter').subscribe(data => {
          this.autoCompleteContents = data;
        });
      }
      if (f.key === 'bank') {
        const filter = (term) => of(term ? this.bankFilter(term) : this.autoCompleteContents.slice());
        f.templateOptions = {...f.templateOptions, filter};
        this.toolservice.getJsonStructureForProduct('withdraw').subscribe(data => {
          this.autoCompleteContents = data;
        });
      }
      if (f.key === 'purpose') {
        const filter = (term) => of(term ? this.autoCompleteFilter(term) : this.purposeList.slice());
        f.templateOptions = {...f.templateOptions, filter};
        this.toolservice.getJsonStructureForProduct('purpose').subscribe(data => {
          this.purposeList = data;
        });
      }
      return f;
    });
  }

  getJsonStructureForProduct(): void {
    this.toolservice.getJsonStructureForProduct(this.product).subscribe((data: FormlyFieldConfig[]) => {
      this.fields  = this.mapFields(data);
    });
  }

  onSubmit() {
    console.log(this.model);
  }

  ngOnInit() {
    this.getJsonStructureForProduct();
  }


}
