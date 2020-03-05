import { Injectable } from '@angular/core';
import { Book, CartItem } from '../models/BookModels';
import { CartService } from './cart.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/UserModels';
import { Order, OrderDetails } from '../models/OrderModels';

@Injectable({
  providedIn: 'root'
})
export class BackendService {


  user: BehaviorSubject<User>;


  constructor(private cartService: CartService) {

    this.user = new BehaviorSubject<User>(this.getCurrentUser());

   }

  async createOrder(){
  await this.cartService.createOrder( this.user.value.id);
     
  }

  getCurrentUser(): User {
      let user: User = JSON.parse(localStorage.getItem('user'));
    return user;
  }

  observeUser(): Observable<User> {
    return this.user.asObservable();
  }
  
  updateUser(): void {
    this.user.next(this.getCurrentUser());
  }




}
