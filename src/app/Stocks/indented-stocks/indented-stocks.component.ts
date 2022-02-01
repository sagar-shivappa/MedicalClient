import { Component, Input, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { SharedService } from 'src/app/shared.service';
import { AddItemPopComponent } from '../add-item-pop/add-item-pop.component';
import { ExcelSheetService } from '../../../services/excel-sheet.service';

@Component({
  selector: 'app-indented-stocks',
  templateUrl: './indented-stocks.component.html',
  styleUrls: ['./indented-stocks.component.css'],
})
export class IndentedStocksComponent implements OnInit {
  @Input() indStockList: any;
  p = 1;
  newList: any;
  reqQty: any;
  constructor(
    public dialog: MatDialog,
    public sharedService: SharedService,
    public excelService: ExcelSheetService
  ) {}

  ngOnInit(): void {
    this.newList = this.indStockList.filter((item: any) => item.quantity < 100);
    console.log(this.newList);

    this.sharedService.currentData.subscribe((data) => {
      if (Object.keys(data).length > 1) {
        this.newList.push(data);
      }
    });
  }
  addRequirement(count: any, obj1: any) {
    let a = this.newList.filter((item: any) => item.id == obj1);
    this.newList[this.newList.indexOf(a[0])]['reqQty'] = count;
    console.log(this.newList);
  }
  deleteItem(value: any) {
    if (confirm(`Deleting Item ${value.productName} ?`)) {
      let a = this.newList.filter((item: any) => item.id == value.id);
      this.newList.splice(this.newList.indexOf(a[0]), 1);
    }
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(AddItemPopComponent, {
      width: '550px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
  downloadExcel() {
    this.excelService.exportAsExcelFile(this.newList, 'myIntedts');
  }
}
