import { Component, OnInit } from '@angular/core';
import { moveIn, fallIn } from '../shared/router.animation';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [moveIn(),fallIn()],
  host: {'[@moveIn]':''}
})
export class LoginComponent implements OnInit {
  state: string ='';
  isShow = false;
  constructor() { }

  switchForm() {
    console.log("switch")
    this.isShow = !this.isShow;
  }
  ngOnInit() {
  }

}
