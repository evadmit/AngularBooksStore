import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Order, OrderItem, OrderDetails, OrderStatus } from '../models/OrderModels';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
export class AdminManageService{

    
    allOrders: BehaviorSubject<OrderItem[]>=new BehaviorSubject<OrderItem[]>([]);;
    
    allUserOrders: BehaviorSubject<OrderItem[]>=new BehaviorSubject<OrderItem[]>([]);;
   
    constructor(private http: HttpService) {  
      
        this.getAllOrders().then((data) => {

            this.allOrders.next(data);

        });
   }

   async getAllOrders(): Promise< Array<OrderItem>>{
    
        var ordersString: string = 'orders';
        let orders: Array<Order> = await (await this.http.get<Array<Order>>(ordersString)).toPromise();
        let allOrderDets: Array<OrderDetails> = await (await this.http.get<Array<OrderDetails>>('orderDetails?_expand=book')).toPromise();
        let fullOrders: Array<OrderItem>= new Array<OrderItem>();
        orders.forEach(async element => {
           
            var orderDets = allOrderDets.filter(item=> item.orderId == element.id);
            fullOrders.push(new OrderItem(element, orderDets));
            
        });
        this.allOrders.next(fullOrders);
   return fullOrders;
    }

    
   async getAllOrdersForUser(userId: number): Promise< Array<OrderItem>>{
    
    var ordersString: string = `orders/?userId=${userId}`;
    let orders: Array<Order> = await (await this.http.get<Array<Order>>(ordersString)).toPromise();
    let allOrderDets: Array<OrderDetails> = await (await this.http.get<Array<OrderDetails>>('orderDetails?_expand=book')).toPromise();
    let  userFullOrders: Array<OrderItem> = new Array<OrderItem>();
    orders.forEach(async element => {
       
        var orderDets = allOrderDets.filter(item=> item.orderId == element.id);
       userFullOrders.push(new OrderItem(element, orderDets));
        
    });
    this.allUserOrders.next(userFullOrders);
    return userFullOrders;
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
      var result =  this.http.delete('orderDetails',element.id);

      });
      
       var orderRes=  this.http.delete('orders',target_order.order.id);
     
        await this.updateUserOrders(target_order.order.userId);

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
    
  observeUserOrders(): Observable<OrderItem[]> {
    return this.allUserOrders.asObservable();
  }

  async updateUserOrders(userId: number): Promise<void> {
    console.log("updating for user")
    this.allUserOrders.next(await this.getAllOrdersForUser(userId));
  }
}
