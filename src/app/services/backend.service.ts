import { Injectable } from '@angular/core';
import { Book, CartItem } from '../models/BookModels';
import { CartService } from './cart.service';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private cartService: CartService) { }


  register():void{

  }

  
  login():void{
    
  }




}
