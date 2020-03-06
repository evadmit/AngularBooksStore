import { Component, OnInit, Input } from '@angular/core';
import { OrderItem, OrderDetails, OrderStatus } from 'src/app/models/OrderModels';

@Component({
  selector: 'user-order-item',
  templateUrl: './user-order-item.component.html',
  styleUrls: ['./user-order-item.component.css']
})
export class UserOrderItemComponent implements OnInit {

  @Input() orderItem: OrderItem;

 
  orderDetails: Array<OrderDetails>;
  price:string;
  status:string;
  isConfirmed:boolean;
  panelOpenState = false;
  
  constructor() { }

  ngOnInit() {
    this.orderDetails = this.orderItem.orderDetails;
    var sum: number = 0;
    this.orderItem.orderDetails.forEach(item =>{
      sum+= item.book.price*item.quantity;
    })
    this.price = "total: " + sum;
    this.isConfirmed = this.orderItem.order.status == OrderStatus.completed||this.orderItem.order.status == OrderStatus.rejected;
    this.status = OrderStatus[this.orderItem.order.status] ;
 
  }

}
