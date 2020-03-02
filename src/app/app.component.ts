import { Component, OnInit } from '@angular/core';
import { CartService } from './services/cart.service';
import { User, Role } from './models/UserModels';
import { BackendService } from './services/backend.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'books-store';
  isLogged = false;
  isAdmin = false;
  itemsInCart: number;
  currentUser: User;
  constructor(private cartService: CartService, private backendService:BackendService, private router: Router) {
   console.log(this.currentUser)
  }
  ngOnInit() {
    this.cartService.observeCartValue().subscribe((value) => {
      this.itemsInCart = value;
    });

    this.backendService.observeUser().subscribe((value)=>{
      this.currentUser = value;

      console.log("user :", this.currentUser,Role.admin )
      if(this.currentUser&&(this.currentUser.role) == Role.admin){
        this.isAdmin = true;
        console.log("user is admin", this.currentUser,Role.admin )
      }
    })
  }

  Logout(){
    localStorage.removeItem('user');
    this.cartService.cleanCart();
    this.isAdmin = false;
    this.isLogged = false;
    this.backendService.updateUser();
    this.router.navigate(['books-list'], { replaceUrl: true });
  }
}
