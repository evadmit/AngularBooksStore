import { Book } from './BookModels';

export class Order {
    id: number = Math.floor(Math.random() * (999999 - 100000)) + 100000;;
    userId: number;
    createdAt: string;
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
