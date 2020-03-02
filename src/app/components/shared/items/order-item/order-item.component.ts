import { Component, OnInit, Input } from '@angular/core';
import { OrderItem, OrderDetails } from 'src/app/models/OrderModels';

@Component({
  selector: 'order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.css']
})
export class OrderItemComponent implements OnInit {

  @Input() orderItem: OrderItem;
  orderDetails: Array<OrderDetails>;
  price:string;
  panelOpenState = false;
  constructor() { }

  ngOnInit() {
    this.orderDetails = this.orderItem.orderDetails;
    var sum: number = 0;
    this.orderItem.orderDetails.forEach(item =>{
      sum+= item.book.price*item.quantity;
    })
    console.log(this.orderItem)
    this.price = "total: " + sum;
  }

}
