import { Component, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-item-pop',
  templateUrl: './add-item-pop.component.html',
  styleUrls: ['./add-item-pop.component.css'],
})
export class AddItemPopComponent implements OnInit {
  constructor(
    private dialogRef: MatDialogRef<AddItemPopComponent>,
    public sharedService: SharedService
  ) {}
  public newDrug = { dcCode: '', productName: '', reqQty: '' };

  ngOnInit(): void {}

  closeDialog() {
    console.log(this.newDrug);
    this.sharedService.updateMessage(this.newDrug);
    this.dialogRef.close();
  }
}
