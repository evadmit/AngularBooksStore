import { Component, OnInit, Input } from '@angular/core';
import { CartItem } from 'src/app/models/BookModels';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input() cartItem: CartItem;
  price:string;
  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.price =this.cartService.getSumForItem(this.cartItem);
   }
   
   removeFromCart(){
     console.log("removing")
    this.cartService.removeFromCart(this.cartItem);
   }
 

}
