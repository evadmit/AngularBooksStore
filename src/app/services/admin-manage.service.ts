import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Order, OrderItem, OrderDetails } from '../models/OrderModels';

@Injectable({
    providedIn: 'root'
  })
export class AdminManageService{

    fullOrders: Array<OrderItem> ;
    constructor(private http: HttpService) {  
        this.fullOrders = new Array<OrderItem>();
    }

   async getAllOrders(): Promise< Array<OrderItem>>{
        let orders: Array<Order> = await (await this.http.get<Array<Order>>('orders')).toPromise();
        let allOrderDets: Array<OrderDetails> = await (await this.http.get<Array<OrderDetails>>('orderDetails?_expand=book')).toPromise();
      
        orders.forEach(async element => {
           
            var orderDets = allOrderDets.filter(item=> item.orderId == element.id);
            this.fullOrders.push(new OrderItem(element, orderDets))
        });
   return this.fullOrders;
    }

    async confirmOrder(id: number){
        var target_order = this.fullOrders.find(it => it.order.id == id);

    }
}
