import { Injectable } from '@angular/core';
import { Book, CartItem } from '../models/BookModels';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor() { }



  addToCart(book: Book){
    if (localStorage.getItem('cart') == null) {
      let cart:  CartItem[] = [];
      const newItem : CartItem = 
      {
        selectedBook : book, 
        quantity:  1
      }
      cart.push(newItem);
      localStorage.setItem('cart', JSON.stringify(cart));
    } 
    else {
      let cart: CartItem[] = JSON.parse( localStorage.getItem('cart'));

      let index: number = -1;
      for (var i = 0; i < cart.length; i++) {
        let cartitem: CartItem = cart[i];
        let item = cartitem.selectedBook;
        if (item.id == book.id) {
          index = i;
          break;
        }
      }
      if (index == -1) {
        const newItem : CartItem = 
        {
          selectedBook : book, 
          quantity:  1
        }

        cart.push(newItem);
        localStorage.setItem('cart', JSON.stringify(cart));
      } else {
        let item: CartItem = cart[index];
        item.quantity+=1;
        cart[index] = item;
        localStorage.setItem("cart", JSON.stringify(cart));
      }}
console.log("shopping cart ", localStorage.getItem('cart'))
}


}
