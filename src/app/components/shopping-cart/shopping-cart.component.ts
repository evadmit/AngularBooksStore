import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/BookModels';
import { CartService } from 'src/app/services/cart.service';
import { Order, OrderDetails } from 'src/app/models/OrderModels';
import { HttpService } from 'src/app/services/http.service';
import { pipe } from 'rxjs';
import { DatePipe, formatDate } from '@angular/common';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  books: Array<CartItem>
  totalPrice: number;
  cart: Array<CartItem>
  constructor(private cartService: CartService, private http: HttpService) { }

  ngOnInit() {

    this.cartService.observeCart().subscribe((value) => {
      this.books = value;
    });

    this.cartService.observeSum().subscribe((value) => {
      this.totalPrice = value;
    });
    console.log("cart ", this.books)
  }

 async createOrder() {
   var now =new  Date();
   const formattedDate = formatDate(now, 'dd/MM/yyyy', 'en-US');

    
let order: Order = new Order();
    order.userId = 1;
    order.createdAt = formattedDate;

    try {
    var res =  (await this.http.post(order, "orders")).toPromise();
    
    this.books.forEach(async item => {
        let orderDet: OrderDetails = new OrderDetails();
        orderDet.bookId = item.selectedBook.id;
        orderDet.quantity = item.quantity;
        orderDet.orderId = order.id;
        orderDet.sum = item.quantity * item.selectedBook.price;

      (await this.http.post(orderDet, "orderDetails")).toPromise();
     
      });
      this.cartService.cleanCart();
    }
    catch (error) {
      alert("can't buy now... try again later")
 console.log(error)
    }
  }

}
