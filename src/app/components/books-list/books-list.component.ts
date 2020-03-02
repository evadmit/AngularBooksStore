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

  books: Array<Book> = [
    {id:1, available:5, ganre:"test", title: "test", description:"Kobe Bryant is one of the most accomplished and r All-Star Game MVP awards, among many other achievements. Bryant retired in 2016. He lives in Southern California with his wife, Vanessa, and their three daughters. He still claims he’s never been beaten one-on-one.", author:"", price:25.5, image:"https://i.postimg.cc/G4bd0dsp/2016-02-12-00-05-05-910db405-6bd4-4a5d-bce7-c2e3135dc5e6-449070.png"},
    ];
  
  constructor(private _route: ActivatedRoute, private _router: Router, private http: HttpService) { }

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
