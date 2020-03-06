import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/BookModels';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {

  books: Array<Book> ;
  
  constructor( private _router: Router, private http: HttpService) { }

  async ngOnInit() {
    await this.getAllBoks();
  }

  async getAllBoks(): Promise< Array<Book>>{
    this.books = await ( await this.http.get<Array<Book>>('books')).toPromise();
  
return this.books;
}

  displayDetails(book: Book){
    var k = book;
    this._router.navigate(['/book-details', book])
  }
}
