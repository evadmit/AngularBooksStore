import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { OrderItem, OrderDetails, OrderStatus } from 'src/app/models/OrderModels';

import {MatDialog} from '@angular/material/dialog';


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
    this.isConfirmed = this.orderItem.order.status == OrderStatus.completed;
  }


}
