import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Order, OrderItem, OrderDetails, OrderStatus } from '../models/OrderModels';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
export class AdminManageService{

    fullOrders: Array<OrderItem> ;
    allOrders: BehaviorSubject<OrderItem[]>=new BehaviorSubject<OrderItem[]>([]);;
    constructor(private http: HttpService) {  
        this.fullOrders = new Array<OrderItem>();
        this.getAllOrders().then((data) => {

            this.allOrders.next(data);

        });
   }

   async getAllOrders(userId?: number): Promise< Array<OrderItem>>{
    
        var ordersString: string = userId?`orders/?userId=${userId}`:'orders';
        let orders: Array<Order> = await (await this.http.get<Array<Order>>(ordersString)).toPromise();
        let allOrderDets: Array<OrderDetails> = await (await this.http.get<Array<OrderDetails>>('orderDetails?_expand=book')).toPromise();
      
        orders.forEach(async element => {
           
            var orderDets = allOrderDets.filter(item=> item.orderId == element.id);
            this.fullOrders.push(new OrderItem(element, orderDets))
        });
   return this.fullOrders;
    }

    async confirmOrder(target_order: OrderItem){
       var order =  target_order.order;
        order.status = OrderStatus.completed;
        order.adminComment = "order confirmed";
        await this.http.patch('orders',order.id,order);
        await this.updateAllValues();

    }

    async rejectOrder(target_order: OrderItem){
       var order =  target_order.order;
        order.status = OrderStatus.rejected;
        await this.http.patch('orders',order.id,order);
        await this.updateAllValues();

    }

    async deleteOrder(target_order: OrderItem){

      target_order.orderDetails.forEach(async element => {
        await this.http.delete('orderDetails',element.id);
      });
      
        await this.http.delete('orders',target_order.order.id,);
        await this.updateAllValues();

    }


    async updateAllValues(): Promise<void> {
     await   this.updateOrders();
      }
    
  observeOrders(): Observable<OrderItem[]> {
    return this.allOrders.asObservable();
  }
  async updateOrders(): Promise<void> {
    console.log("updating")
    this.allOrders.next(await this.getAllOrders());
  }

}
