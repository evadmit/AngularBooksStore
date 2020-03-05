import { Component, OnInit, Input, Inject, Output, EventEmitter } from '@angular/core';
import { OrderItem, OrderDetails, OrdeStatus } from 'src/app/models/OrderModels';

import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { RemoveOrderDialog } from '../dialogs/remove-order-dialog/remove-order-dialog.component';


@Component({
  selector: 'order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.css']
})
export class OrderItemComponent implements OnInit {

  @Input() orderItem: OrderItem;
  @Output() onCancelClick = new EventEmitter();
  @Output() onConfirmClick = new EventEmitter();
  
  orderDetails: Array<OrderDetails>;
  price:string;
  isConfirmed:boolean;
  panelOpenState = false;
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    this.orderDetails = this.orderItem.orderDetails;
    var sum: number = 0;
    this.orderItem.orderDetails.forEach(item =>{
      sum+= item.book.price*item.quantity;
    })
    this.price = "total: " + sum;
    this.isConfirmed = this.orderItem.order.status == OrdeStatus.completed;
  }


}
