import { Component, OnInit, Input } from '@angular/core';
import { CartItem } from 'src/app/models/BookModels';
import { ActivatedRoute, Router } from '@angular/router';
import { BackendService } from 'src/app/services/backend.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input() cartItem: CartItem;
  price:string;
  constructor(private _route: ActivatedRoute, private _router: Router, private cartService: CartService) { }

  ngOnInit() {
    this.price =this.cartService.getSumForItem(this.cartItem);
   }
   
   removeFromCart(){
     console.log("removing")
    this.cartService.removeFromCart(this.cartItem);
   }
 

}
