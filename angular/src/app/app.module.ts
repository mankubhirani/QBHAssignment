import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgxPaginationModule} from 'ngx-pagination';
import { Ng2SearchPipe } from 'ng2-search-filter';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddCartComponent } from './add-cart/add-cart.component';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { DatePipe, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { MainComponent } from './main/main.component';
import { FormComponent } from './QBH Solution/form/form.component';
import { TableComponent } from './QBH Solution/table/table.component';
import { ParentComponent } from './QBH Solution/parent/parent.component';
import { PdfViewerComponent } from './QBH Solution/pdf-viewer/pdf-viewer.component';


@NgModule({
  declarations: [
    AppComponent,
    AddCartComponent,
    MainComponent,
    FormComponent,
    TableComponent,
    ParentComponent,
    PdfViewerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
   
    NgxPaginationModule,
    HttpClientModule ,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
