import {HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { ToolsComponent } from './tools.component';

@NgModule({
  declarations: [ToolsComponent],
  imports: [
    HttpClientModule,
    BrowserModule
  ],
  exports: [ToolsComponent]
})
export class ToolsModule { }
