import { Component, OnInit } from '@angular/core';
import { User, Role } from 'src/app/models/UserModels';
import { HttpService } from 'src/app/services/http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  newUser: User ;
  isAuthor:false;

  constructor( private http: HttpService , private route: ActivatedRoute, private router: Router) {
  this.newUser= new User();
  this.newUser.role=Role.client;
  this.newUser.id=Math.floor(Math.random() * (999999 - 100000)) + 100000;
   }

  ngOnInit() {
  }

  async Register(){
    if(this.isAuthor)
    {
    this.newUser.role = Role.author}
   try {
      var res=   (await this.http.post(this.newUser, 'users')).toPromise();
      this.router.navigate(['books-list']);

   } catch (error) {
     alert("error")
   }
  
   
    console.log("res",res)
  }
}