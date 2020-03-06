import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/UserModels';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  state: string = '';
  email: string = '';
  password: string = '';
  loginUser: User;
  isShow = false;
  constructor(private http: HttpService, private route: ActivatedRoute, private router: Router, private backendService:BackendService) {

  }

  switchForm() {
    console.log("switch")
    this.isShow = !this.isShow;
  }
  ngOnInit() {
  }

  async Login() {
    try {
      var res = (await (await this.http.get<Array<User>>('users')).toPromise());
      console.log(res)
      
      res.forEach(e => {
        if (e.email == this.email && e.password == this.password) {
          this.loginUser = e;
        }
      });

      if (this.loginUser) {
        console.log(this.loginUser)
        localStorage.setItem('user', JSON.stringify(this.loginUser));
        this.backendService.updateUser();
        this.router.navigate(['books-list']);
      }
      else {
        alert("User not found")
      }
    } catch (error) {
      console.log(error)
    }
  }

}
