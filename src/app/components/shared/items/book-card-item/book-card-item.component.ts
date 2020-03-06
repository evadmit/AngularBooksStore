import { Component, OnInit, Input } from '@angular/core';
import { Book } from 'src/app/models/BookModels';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'book-card-item',
  templateUrl: './book-card-item.component.html',
  styleUrls: ['./book-card-item.component.css']
})
export class BookCardItemComponent implements OnInit {
  @Input() item: Book;
  constructor(private _route: ActivatedRoute, private _router: Router, private cartService: CartService) { }

  ngOnInit() {
  }

  addToCart(book: Book){
    this.cartService.addToCart(book);
}

  displayDetails(book: Book){
    this._router.navigate(['/book-details', book])
  }
}
