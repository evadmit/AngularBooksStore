import { Injectable } from '@angular/core';
import {  BehaviorSubject, Observable } from 'rxjs';
import { CartItem, Book } from '../models/BookModels';

@Injectable({
  providedIn: 'root'
})
export class CartService {


  itemsInCart: BehaviorSubject<number>;
  totalSum: BehaviorSubject<number>;
  currentCart: BehaviorSubject<CartItem[]>;

  constructor() {
    this.itemsInCart = new BehaviorSubject<number>(this.getCountItems());
    this.totalSum = new BehaviorSubject<number>(this.getTotalCartSum());
    this.currentCart = new BehaviorSubject<CartItem[]>(this.getCurrentCart());

  }

  private getCurrentCart(): CartItem[] {
    let cart: CartItem[] = JSON.parse(localStorage.getItem('cart'));
    return cart;
  }

  private getCountItems(): number {
    let cart = this.getCurrentCart();
    if (!cart) {
      return 0;
    }
    var countItems = 0;
    for (var i = 0; i < cart.length; i++) {
      let cartitem: CartItem = cart[i];
      countItems += cartitem.quantity;

    }
    return countItems;
  }

  cleanCart(): void {
    localStorage.removeItem('cart');
  }

  addToCart(book: Book) {

    if (localStorage.getItem('cart') == null) {
      let cart: CartItem[] = [];
      const newItem: CartItem =
      {
        selectedBook: book,
        quantity: 1
      }
      cart.push(newItem);
      localStorage.setItem('cart', JSON.stringify(cart));
    }

    else {
      let cart = this.getCurrentCart();

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
        const newItem: CartItem =
        {
          selectedBook: book,
          quantity: 1
        }

        cart.push(newItem);
        localStorage.setItem('cart', JSON.stringify(cart));
      }

      else {
        let item: CartItem = cart[index];
        item.quantity += 1;
        cart[index] = item;
        localStorage.setItem("cart", JSON.stringify(cart));
      }
    }

    console.log("shopping cart ", localStorage.getItem('cart'));
    this.updateAllValues();
  }

  removeFromCart(cartItem: CartItem) {

    let cart = this.getCurrentCart();
    if (!cart) {
      return;
    }
    var idx = -1;
    for (var i = 0; i < cart.length; i++) {
      let currentCartitem: CartItem = cart[i];
      if (cartItem.selectedBook.id == currentCartitem.selectedBook.id) {
        idx = i;
      }

      if (idx != -1) {
        cart.splice(idx, 1);
      }

    } console.log("card slice at", idx)
    localStorage.setItem('cart', JSON.stringify(cart));
    this.updateAllValues();
  }

  //#region Observers
  updateAllValues(): void {
    this.updateCart();
    this.updateCartValue();
    this.updateSum();
  }

  observeCartValue(): Observable<number> {
    return this.itemsInCart.asObservable();
  }
  updateCartValue(): void {
    this.itemsInCart.next(this.getCountItems());
  }

  observeCart(): Observable<CartItem[]> {
    return this.currentCart.asObservable();
  }
  updateCart(): void {
    this.currentCart.next(this.getCurrentCart());
  }

  observeSum(): Observable<number> {
    return this.totalSum.asObservable();
  }

  updateSum(): void {
    this.totalSum.next(this.getTotalCartSum());
  }

  //#endregion


  getSumForItem(cartItem: CartItem): string {
    var total = cartItem.quantity * cartItem.selectedBook.price;
    var priceToBind = "total: " + cartItem.quantity + " x " + cartItem.selectedBook.price + " = " + total;
    return priceToBind;
  }

  getTotalCartSum(): number {

    let cart = this.getCurrentCart();
    if (!cart) {
      return 0;
    }
    var totalPrice = 0.0;
    for (var i = 0; i < cart.length; i++) {
      let cartitem: CartItem = cart[i];
      totalPrice += cartitem.quantity * cartitem.selectedBook.price;

    }
    return totalPrice;
  }

}
