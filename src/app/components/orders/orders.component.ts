import { Component, OnInit } from '@angular/core';
import { OrderItem } from 'src/app/models/OrderModels';
import { AdminManageService } from 'src/app/services/admin-manage.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders: Array<OrderItem>
  constructor(private admService : AdminManageService) 
  { 

  }

  ngOnInit() {
    this.getAllOrders().then(res=>{});
  }

  async getAllOrders(){

    console.log("getAllOrders...")
    var _orders = await this.admService.getAllOrders();
    this.orders = _orders;
    console.log("all orders", this.orders)
  }
}
