import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import {MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { PaginationComponent } from './pagination/pagination.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatMomentDateModule} from '@angular/material-moment-adapter';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {BasicInterceptor} from './interceptor/basic-interceptor';
import {MatSortModule} from '@angular/material/sort';
import { ProgressSpinnerComponent } from './progress-spinner/progress-spinner.component';
import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
@NgModule({
  declarations: [
    AppComponent,
    PaginationComponent,
    ProgressSpinnerComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    NoopAnimationsModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatExpansionModule,
    MatIconModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatFormFieldModule,
    FormsModule,
    MatSortModule,
    MatDialogModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: BasicInterceptor, multi: true},
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true}}],
  bootstrap: [AppComponent]
})
export class AppModule { }
