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
  dataSource2: any;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor() {}
  ngOnInit(): void {
    this.dataSource1 = this.activeDrugList;
    const dataSource = new MatTableDataSource<any>(this.dataSource1);
    this.dataSource2 = dataSource;
    dataSource.paginator = this.paginator;
  }
  // ngAfterViewInit() {
  //   const dataSource = new MatTableDataSource(this.dataSource1);
  //   dataSource.paginator = this.paginator;
  // }

  // filterdata(value: any) {
  //   console.log(value);
  // }
  public doFilter = (value: any) => {
    this.dataSource2.filter = value.target.value.trim().toLocaleLowerCase();
  };
}
