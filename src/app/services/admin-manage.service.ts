import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Order, OrderItem, OrderDetails, OrdeStatus } from '../models/OrderModels';
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

   async getAllOrders(): Promise< Array<OrderItem>>{
    
        let orders: Array<Order> = await (await this.http.get<Array<Order>>('orders')).toPromise();
        let allOrderDets: Array<OrderDetails> = await (await this.http.get<Array<OrderDetails>>('orderDetails?_expand=book')).toPromise();
      
        orders.forEach(async element => {
           
            var orderDets = allOrderDets.filter(item=> item.orderId == element.id);
            this.fullOrders.push(new OrderItem(element, orderDets))
        });
   return this.fullOrders;
    }

    async confirmOrder(target_order: OrderItem){
       var order =  target_order.order;
        order.status = OrdeStatus.completed;
        order.adminComment = "order confirmed";
        await this.http.patch('orders',order.id,order);
        await this.updateAllValues();

    }

    async rejectOrder(target_order: OrderItem){
       var order =  target_order.order;
        order.status = OrdeStatus.rejected;
        await this.http.patch('orders',order.id,order);
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
