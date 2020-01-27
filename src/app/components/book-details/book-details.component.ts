import { Component, OnInit } from '@angular/core';
import {Book} from '../../models/BookModels'
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  book:Book;
  private sub :any;
  ngOnInit() {
   this.sub= this.route.params.subscribe((params: Book) => this.book = params);
  console.log(this.book)
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
