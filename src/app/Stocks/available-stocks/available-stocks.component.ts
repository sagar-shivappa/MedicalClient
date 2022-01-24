import {
  Component,
  Input,
  OnInit,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

export interface AvailableData {}

@Component({
  selector: 'app-available-stocks',
  templateUrl: './available-stocks.component.html',
  styleUrls: ['./available-stocks.component.css'],
})
export class AvailableStocksComponent implements OnInit {
  @Input() activeDrugList: any;
  p = 1;
  @ViewChild(MatSort)
  sort: MatSort = new MatSort();

  displayedColumns: string[] = [
    'No.',
    'DC Code',
    'Product Name',
    'Batch Number',
    'Manuf Date',
    'Expiry Date',
    'Quantity',
  ];
  dataSource1: any;
  dataSource: any;
  pageSize: '7';
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor() {}
  ngOnInit(): void {
    // this.dataSource1 = this.activeDrugList;
    // this.dataSource = new MatTableDataSource<any>(this.dataSource1);
    // setTimeout(() => {
    //   this.dataSource.paginator = this.paginator;
    // }, 100);
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  public doFilter = (value: any) => {
    let activeDrugList1 = this.activeDrugList.filter((itm: any) => {
      console.log(value);
    });
    console.log(activeDrugList1);
  };
}
