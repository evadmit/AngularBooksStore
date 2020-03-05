import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { OrderItem } from 'src/app/models/OrderModels';

@Component({
  selector: 'app-remove-order-dialog',
  templateUrl: './remove-order-dialog.component.html',
  styleUrls: ['./remove-order-dialog.component.css']
})
export class RemoveOrderDialog implements OnInit {

  constructor( public dialogRef: MatDialogRef<RemoveOrderDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  ngOnInit() {
  }
  onCancelClick(): void {
    this.dialogRef.close();
  }
}

export interface DialogData {
  reason: string;
  order: OrderItem;
}
