import { Book } from './BookModels';
import { formatDate } from '@angular/common';

export class Order {
    id: number = Math.floor(Math.random() * (999999 - 100000)) + 100000;;
    userId: number;
    createdAt: string = formatDate(new Date(), 'MMM d, y, h:mm:ss a', 'en') ;
    status: OrdeStatus= OrdeStatus.new;
    adminComment : string = "";
}

export class OrderDetails {
    id: number = Math.floor(Math.random() * (999999 - 100000)) + 100000;;
    bookId: number;
    quantity: number;
    orderId: number;
    sum: number;
    book: Book;


    constructor(  _bookId?: number, _quantity?: number, _orderId?: number,  _sum?: number,  _book?: Book) {
           this.bookId= _bookId;
           this.quantity= _quantity;
           this.orderId=_orderId;
           this.sum=_sum;
           this.book= _book;
        
    }
}

export class OrderItem{
  
    constructor( _order: Order, _orderDetails: Array<OrderDetails> ) {
       
        this.order=_order;
        this.orderDetails=_orderDetails;
    }
    order: Order;
    orderDetails: Array<OrderDetails>;
}
export enum OrdeStatus{
    new,
    rejected,
    completed
}
