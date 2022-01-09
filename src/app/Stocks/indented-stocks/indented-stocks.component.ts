import { Component, Input, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { AddItemPopComponent } from '../add-item-pop/add-item-pop.component';

@Component({
  selector: 'app-indented-stocks',
  templateUrl: './indented-stocks.component.html',
  styleUrls: ['./indented-stocks.component.css'],
})
export class IndentedStocksComponent implements OnInit {
  @Input() indStockList: any;
  newList: any;
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.newList = this.indStockList.filter((item: any) => item.quantity < 20);
    console.log('intdented', this.newList);
  }
  addRequirement(count: any, obj1: any) {
    let a = this.newList.filter((item: any) => item.id == obj1);
    this.newList[this.newList.indexOf(a[0])]['reqOty'] = count;
    console.log(this.newList);
  }
  deleteItem(value: any) {
    let a = this.newList.filter((item: any) => item.id == value);
    // console.log(this.newList.indexOf(a[0]), 1);
    this.newList.splice(this.newList.indexOf(a[0]), 1);
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(AddItemPopComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
