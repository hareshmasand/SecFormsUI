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
  displayedColumns: string[] = [];
  txnData: string[] = [];
  dataSource: MatTableDataSource<any>;
  public spinnerDialog: MatDialogRef<ProgressSpinnerComponent>;

  columns = [
    { columnDef: 'tradeDate', header: 'Trade Date' },
    { columnDef: 'formType', header: 'Form Type' },
    { columnDef: 'ticker', header: 'Ticker' },
    { columnDef: 'secTitle', header: 'Security Title' },
    { columnDef: 'txnCode', header: 'Transaction Code' },
    { columnDef: 'shares', header: 'Shares' },
    { columnDef: 'sharePrice', header: 'Share Price' },
    { columnDef: 'value', header: 'Value' }
  ]


  ngOnInit(): void {
    this.displayedColumns = this.displayedColumns.concat(this.columns.map(x => x.columnDef));
    this.loadTransactionData();
  }

  loadTransactionData(){
    const PROMISE = this.httpClient.get<any>(this.uiAppConstant.BASE_URL+"/getOwnershipTransactionsData");
    PROMISE.subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });
  } 


}
