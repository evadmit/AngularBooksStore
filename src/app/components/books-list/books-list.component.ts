import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/BookModels';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {

  books: Array<Book> = [
    {id:"book1", available:5, ganre:"fantasy", title: "book1", description:"Kobe Bryant is one of the most accomplished and r All-Star Game MVP awards, among many other achievements. Bryant retired in 2016. He lives in Southern California with his wife, Vanessa, and their three daughters. He still claims he’s never been beaten one-on-one.", author:"", price:25.5, image:"https://i.postimg.cc/G4bd0dsp/2016-02-12-00-05-05-910db405-6bd4-4a5d-bce7-c2e3135dc5e6-449070.png"},
    {id:"book2",available:5, ganre:"fantasy",title: "book2", description:"Andrew D. Bernstein’s photography has appeared in thousands of newspapers and on magazine covers worldwide. Bernstein is the long-time official photographer for the Los Angeles Lakers and the senior photographer for the NBA. He is the 2018 recipient of the Curt Gowdy Media Award from the Naismith Basketball Hall Of Fame. He regularly appears on ESPN’s SportsCenter and other national television and radio programs.", author:"", price:25.5, image:"https://i.postimg.cc/XZJWJLLS/canva-rust-orange-lioness-vintage-book-cover-2r7-sb-V3ztw.jpg"}, 
    {id:"book3",available:5,ganre:"nonfiction", title: "book3", description:"Andrew D. Bernstein’s photography has appeared in thousands of newspapers and on magazine covers worldwide. Bernstein is the long-time official photographer for the Los Angeles Lakers and the senior photographer for the NBA. He is the 2018 recipient of the C", author:"", price:25.5, image:"https://i.postimg.cc/cgPsgz4t/black-and-white-book.png"}, 
    {id:"book4",available:5, ganre:"fantasy",title: "book4", description:"Andrew D. Bernstein’s photography has appeared in thousands of newspapers and on magazine covers worldwide. Bernstein is the long-time official photographer for the Los Angeles Lakers and the senior photographer for the NBA. He is the 2018 recipient of the Curt Gowdy Media Award from the Naismith Basketball Hall Of Fame. He regularly appears on ESPN’s SportsCenter and other national television and radio programs.", author:"", price:25.5, image:"https://i.postimg.cc/1gCRPtkH/image.jpg"}, 
    {id:"book5",available:5,ganre:"fantasy", title: "book5", description:"Andrew D. Bernstein’s photography has appeared in thousands of newspapers and on magazine covers worldwide. Bernstein is the long-time official photographer for the Los Angeles Lakers and the senior photographer for the NBA. He is the 2018 recipient of the Curt Gowdy Media Award from the Naismith Basketball Hall Of Fame. He regularly appears on ESPN’s SportsCenter and other national television and radio programs.", author:"", price:25.5, image:"https://i.postimg.cc/G4bd0dsp/2016-02-12-00-05-05-910db405-6bd4-4a5d-bce7-c2e3135dc5e6-449070.png"}, 
    {id:"book6",available:5, ganre:"nonfiction",title: "book6", description:"Andrew D. Bernstein’s photography has appeared in thousands of newspapers and on magazine covers worldwide. Bernstein is the long-time official photographer for the Los Angeles Lakers and the senior photographer for the NBA. He is the 2018 recipient of the Curt Gowdy Media Award from the Naismith Basketball Hall Of Fame. He regularly appears on ESPN’s SportsCenter and other national television and radio programs.", author:"", price:25.5, image:"https://i.postimg.cc/XZJWJLLS/canva-rust-orange-lioness-vintage-book-cover-2r7-sb-V3ztw.jpg"}, 
    {id:"book7",available:5,ganre:"fantasy", title: "book7", description:"Andrew D. Bernstein’s photography has appeared in thousands of newspapers and on magazine covers worldwide. Bernstein is the long-time official photographer for the Los Angeles Lakers and the senior photographer for the NBA. He is the 2018 recipient of the Curt Gowdy Media Award from the Naismith Basketball Hall Of Fame. He regularly appears on ESPN’s SportsCenter and other national television and radio programs.", author:"", price:25.5, image:"https://i.postimg.cc/cgPsgz4t/black-and-white-book.png"}, 
    {id:"book8",available:5, ganre:"novel",title: "book8", description:"Andrew D. Bernstein’s photography has appeared in thousands of newspapers and on magazine covers worldwide. Bernstein is the long-time official photographer for the Los Angeles Lakers and the senior photographer for the NBA. He is the 2018 recipient of the Curt Gowdy Media Award from the Naismith Basketball Hall Of Fame. He regularly appears on ESPN’s SportsCenter and other national television and radio programs.", author:"", price:25.5, image:"https://i.postimg.cc/1gCRPtkH/image.jpg"}
  ];
  
  constructor(private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
  }

  displayDetails(book: Book){
    var k = book;
    this._router.navigate(['/book-details', book])
  }
}
