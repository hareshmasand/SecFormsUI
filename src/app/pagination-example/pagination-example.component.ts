import { OnInit } from '@angular/core';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-pagination-example',
  templateUrl: './pagination-example.component.html',
  styleUrls: ['./pagination-example.component.css']
})
export class PaginationExampleComponent implements AfterViewInit {
  displayedColumns: string[] = ['tradeDate','formType','secTitle', 'txnCode', 'shares', 'sharePrice', 'value'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface PeriodicElement {
  tradeDate: string;
  formType: number;
  secTitle: string;
  txnCode: string;
  shares: number;
  sharePrice: number;
  value: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {"tradeDate": "2022-06-30","formType": 1, "secTitle": "Restricted Stock Units","txnCode": "A","shares": 1697.0,"sharePrice": 0.0,"value": 0.0},
  {"tradeDate": "2022-06-30","formType": 2, "secTitle": "Restricted Stock Units","txnCode": "A","shares": 1697.0,"sharePrice": 0.0,"value": 0.0},
  {"tradeDate": "2022-06-30","formType": 3, "secTitle": "Restricted Stock Units","txnCode": "A","shares": 1697.0,"sharePrice": 0.0,"value": 0.0},
  {"tradeDate": "2022-06-30","formType": 4, "secTitle": "Restricted Stock Units","txnCode": "A","shares": 1697.0,"sharePrice": 0.0,"value": 0.0},
  {"tradeDate": "2022-06-30","formType": 5, "secTitle": "Restricted Stock Units","txnCode": "A","shares": 1697.0,"sharePrice": 0.0,"value": 0.0},
  {"tradeDate": "2022-06-30","formType": 6, "secTitle": "Restricted Stock Units","txnCode": "A","shares": 1697.0,"sharePrice": 0.0,"value": 0.0},
  {"tradeDate": "2022-06-30","formType": 7, "secTitle": "Restricted Stock Units","txnCode": "A","shares": 1697.0,"sharePrice": 0.0,"value": 0.0},
  {"tradeDate": "2022-06-30","formType": 8, "secTitle": "Restricted Stock Units","txnCode": "A","shares": 1697.0,"sharePrice": 0.0,"value": 0.0},
  {"tradeDate": "2022-06-30","formType": 9, "secTitle": "Restricted Stock Units","txnCode": "A","shares": 1697.0,"sharePrice": 0.0,"value": 0.0},
  {"tradeDate": "2022-06-30","formType": 10, "secTitle": "Restricted Stock Units","txnCode": "A","shares": 1697.0,"sharePrice": 0.0,"value": 0.0},
  {"tradeDate": "2022-06-30","formType": 11, "secTitle": "Restricted Stock Units","txnCode": "A","shares": 1697.0,"sharePrice": 0.0,"value": 0.0},
  {"tradeDate": "2022-06-30","formType": 12, "secTitle": "Restricted Stock Units","txnCode": "A","shares": 1697.0,"sharePrice": 0.0,"value": 0.0},
  {"tradeDate": "2022-06-30","formType": 13, "secTitle": "Restricted Stock Units","txnCode": "A","shares": 1697.0,"sharePrice": 0.0,"value": 0.0},
  {"tradeDate": "2022-06-30","formType": 14, "secTitle": "Restricted Stock Units","txnCode": "A","shares": 1697.0,"sharePrice": 0.0,"value": 0.0},
  {"tradeDate": "2022-06-30","formType": 15, "secTitle": "Restricted Stock Units","txnCode": "A","shares": 1697.0,"sharePrice": 0.0,"value": 0.0},
  {"tradeDate": "2022-06-30","formType": 16, "secTitle": "Restricted Stock Units","txnCode": "A","shares": 1697.0,"sharePrice": 0.0,"value": 0.0},
  {"tradeDate": "2022-06-30","formType": 17, "secTitle": "Restricted Stock Units","txnCode": "A","shares": 1697.0,"sharePrice": 0.0,"value": 0.0},
  {"tradeDate": "2022-06-30","formType": 18, "secTitle": "Restricted Stock Units","txnCode": "A","shares": 1697.0,"sharePrice": 0.0,"value": 0.0},
  {"tradeDate": "2022-06-30","formType": 19, "secTitle": "Restricted Stock Units","txnCode": "A","shares": 1697.0,"sharePrice": 0.0,"value": 0.0},
  {"tradeDate": "2022-06-30","formType": 20, "secTitle": "Restricted Stock Units","txnCode": "A","shares": 1697.0,"sharePrice": 0.0,"value": 0.0},
  {"tradeDate": "2022-06-30","formType": 21, "secTitle": "Restricted Stock Units","txnCode": "A","shares": 1697.0,"sharePrice": 0.0,"value": 0.0},
  {"tradeDate": "2022-06-30","formType": 22, "secTitle": "Restricted Stock Units","txnCode": "A","shares": 1697.0,"sharePrice": 0.0,"value": 0.0}
  
];
