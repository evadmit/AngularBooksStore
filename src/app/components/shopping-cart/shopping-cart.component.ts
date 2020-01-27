import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/BookModels';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  books: Array<CartItem> 
  constructor() { }

  ngOnInit() {
    let cart:  Array<CartItem>  = JSON.parse( localStorage.getItem('cart'));
    this.books = cart;
    console.log("cart ", this.books)
  }

}
