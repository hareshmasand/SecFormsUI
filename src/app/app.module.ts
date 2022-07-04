import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { PaginationExampleComponent } from './pagination-example/pagination-example.component';
@NgModule({
  declarations: [
    AppComponent,
    PaginationExampleComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    NoopAnimationsModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
