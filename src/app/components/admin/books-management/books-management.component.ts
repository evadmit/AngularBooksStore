import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';
import { Book } from 'src/app/models/BookModels';
import { HttpService } from 'src/app/services/http.service';
import { AdminManageService } from 'src/app/services/admin-manage.service';

@Component({
  selector: 'app-books-management',
  templateUrl: './books-management.component.html',
  styleUrls: ['./books-management.component.css']
})
export class BooksManagementComponent implements OnInit {

  books: Array<Book>;

  constructor(private admService: AdminManageService, private http: HttpService) { }

  async ngOnInit() {

    this.admService.observeBooks().subscribe((value) => {
      this.books = value;
    })
    await this.getAllBoks();
  }

  async saveChanges(book: Book) {

    await this.admService.editBook(book);
  }

  async deleteBook(book: Book) {
    await this.admService.deleteBook(book);
  }

  async getAllBoks() {
    this.books = await (await this.http.get<Array<Book>>('books')).toPromise();
  }

}
