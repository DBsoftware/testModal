import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ModalComponent } from './ui-components/modal/modal.component';
import { TableComponent } from './ui-components/table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    TableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
