import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {FormlyFieldConfig} from '@ngx-formly/core';

@Injectable({
  providedIn: 'root'
})
export class ToolsService {

  constructor(private http: HttpClient) { }

  getJsonStructureForProduct  = (product: string) => this.http.get<FormlyFieldConfig[]>(`http://localhost:8080/${product}.json`);

}
