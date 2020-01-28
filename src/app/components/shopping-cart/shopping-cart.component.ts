import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/BookModels';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  books: Array<CartItem> 
  totalPrice: number;
  cart:  Array<CartItem> 
  constructor(private cartService: CartService) { }

  ngOnInit() {

    this.cartService.observeCart().subscribe((value) => {
      this.books = value;
    });
  
    this.cartService.observeSum().subscribe((value) => {
      this.totalPrice = value;
    });

    console.log("cart ", this.books)
  }

}
