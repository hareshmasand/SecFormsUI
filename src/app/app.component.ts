import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { UiAppConstant } from './ui-app-constant';
import { ProgressSpinnerComponent } from './progress-spinner/progress-spinner.component';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public uiAppConstant: UiAppConstant, public httpClient: HttpClient) {
  }

  title = 'SecForms UI';

  ngOnInit(): void {
  }



}
