import { OnInit } from '@angular/core';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { UiAppConstant } from '../ui-app-constant';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { MAT_DATE_FORMATS } from '@angular/material/core';
import * as _moment from 'moment';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ProgressSpinnerComponent } from '../progress-spinner/progress-spinner.component';
export const MY_DATE_FORMATS = {
  parse: {
    dateInput: 'YYYY/MM/DD',
  },
  display: {
    dateInput: 'YYYY/MM/DD',
    monthYearLabel: 'MMMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY'
  },
};

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
  providers: [
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS }
  ]
})
export class PaginationComponent implements AfterViewInit{
  constructor(public uiAppConstant: UiAppConstant, public httpClient: HttpClient,
    public matDialog: MatDialog) {
  }
  displayedColumns: string[] = ['tradeDate','formType','secTitle', 'txnCode', 'shares', 'sharePrice', 'value', 'ticker'];
  dataSource = new MatTableDataSource<any>();
  txnData: string[] = [];
  pageIdx=0;
  pageSize=10;
  totalCount=0;
  panelOpenState: boolean = false;
  txnCode:string = "";
  txnDate:string = "";
  ticker:string = "";
  dateInput:string = "";
  sortField:string="";
  sortDirection:string="";
  areRecordsPresent:boolean=true;
  moment = _moment; 
  public spinnerDialog: MatDialogRef<ProgressSpinnerComponent>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort, {static:true}) sort: MatSort;
  
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.loadTransactionData();
  }

  ngOnInit(): void {
    
  }

  onPaginateChange(event : any){
    this.pageIdx = event.pageIndex;
    this.pageSize = event.pageSize;
    this.loadTransactionData();
    
  }

  loadTransactionData(){
    this.spinnerDialog = this.matDialog.open(ProgressSpinnerComponent);
    var params = new HttpParams()
    .set("pageNo",this.pageIdx)
    .set("pageSize",this.pageSize)
    console.log("this.ticker: " + this.ticker);
    console.log("this.txnDate: " + this.txnDate) ;
    if(this.txnCode!=""){
      params = params.append("transactionCode",this.txnCode)
    }
    if(this.txnDate != ""){
      params = params.append("transactionDate",this.txnDate)
    }
    if(this.ticker!=""){
      params = params.append("issuerTradingSymbol",this.ticker);
    }
    if(this.sortField!=""){
      params = params.append("sortField",this.sortField);
    }
    if(this.sortDirection!=""){
      params = params.append("sortDirection",this.sortDirection);
    }
    console.log("params: " + params);
    
  
    const options = {
      params:params
    }
    
    const PROMISE = this.httpClient.get<any>(this.uiAppConstant.BASE_URL+"/getOwnershipTransactionsData"
    ,options);  
    PROMISE.subscribe(data => {
      this.txnData = data;
      this.totalCount = data.totalCount;
      this.dataSource = new MatTableDataSource(data.objects);
      this.areRecordsPresent = (data.objects.length == 0);
      this.spinnerDialog.close();
    },error=> {
        this.spinnerDialog.close();
        console.log("some error occured while fetching data");
    });
  }

  applyFilter(){
    this.loadTransactionData();
  }

  resetFilter(){
  this.txnCode= "";
  this.txnDate= "";
  this.ticker= "";
  this.dateInput="";
  this.sortField="";
  this.sortDirection="";
  this.loadTransactionData();
  }

  openFilterSection() {
    this.panelOpenState = !this.panelOpenState
  }

  changeEvent(event : any){
    this.txnDate = this.moment(event.value._d).format('YYYY-MM-DD');
  }
  onSort(event: any){
    this.sortField=event.active;
    this.sortDirection=event.direction;
    console.log(event.active + " " + event.direction);
    this.loadTransactionData();
  }

}




