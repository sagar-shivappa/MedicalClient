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
  activeDrugListCopy: any;
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
  filterCheck: any;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor() {}
  ngOnInit(): void {
    this.activeDrugListCopy = this.activeDrugList;
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  public doFilter = (value: any) => {
    console.log(this.filterCheck, value);
    //this.activeDrugList=["Sagar", "sagar", "Bhoom", "asha", "mahesh", "Mahesh"];
    this.activeDrugList = this.activeDrugListCopy;
    let activeDrugList2 = this.activeDrugList.filter(
      (item: any) => item.productName.toLowerCase().match(value.toLowerCase())
      // console.log(item.productName, value);
    );
    this.activeDrugList = activeDrugList2;
    console.log(activeDrugList2);
  };
}
