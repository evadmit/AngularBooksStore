import { Component, OnInit, Input } from '@angular/core';
import { CartItem } from 'src/app/models/BookModels';
import { ActivatedRoute, Router } from '@angular/router';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input() cartItem: CartItem;
  price:string;
  constructor(private _route: ActivatedRoute, private _router: Router, private backendService: BackendService) { }

  ngOnInit() {
    var total = this.cartItem.quantity*this.cartItem.selectedBook.price;
  this.price = "total: "+ this.cartItem.quantity + " x "+this.cartItem.selectedBook.price+" = "+total;
  }

 

}
