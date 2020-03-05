import { Component, OnInit, OnDestroy } from '@angular/core';
import { CartItem } from 'src/app/models/BookModels';
import { CartService } from 'src/app/services/cart.service';
import { Order, OrderDetails } from 'src/app/models/OrderModels';
import { HttpService } from 'src/app/services/http.service';
import { pipe } from 'rxjs';
import { DatePipe, formatDate } from '@angular/common';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  books: Array<CartItem>
  totalPrice: number;
  cart: Array<CartItem>;
  bookSubscription: any;
  priceSubscription: any;
  constructor(private cartService: CartService, private http: HttpService, private back: BackendService) { }

  ngOnInit() {

   this.bookSubscription= this.cartService.observeCart().subscribe((value) => {
      this.books = value;
    });

   this.priceSubscription= this.cartService.observeSum().subscribe((value) => {
      this.totalPrice = value;
    });
  }


 async createOrder() {
   try {
     
  await this.back.createOrder();
  this.cartService.cleanCart();
  this.cartService.updateAllValues();
 
   } catch (error) {
     console.log('error creating order')
   }

  }

}
