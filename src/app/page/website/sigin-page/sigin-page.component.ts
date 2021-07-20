import {
  localStoragetype,
  signinType,
  User,
} from './../../../type/signinTypes';
import { authService } from './../../../service/auth.service';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
@Component({
  selector: 'app-sigin-page',
  templateUrl: './sigin-page.component.html',
  styleUrls: ['./sigin-page.component.scss'],
})
export class SiginPageComponent implements OnInit {
  constructor(
    private authService: authService  ,
    private Router : Router
    ) {}
  user: signinType = {
    email: '',
    password: '',
  };
  data : any
  ngOnInit(): void {}
  signin() {
    this.authService
      .signIn(this.user.email, this.user.password)
      .subscribe((data) => {
        localStorage.setItem('user' , JSON.stringify(data))
        this.authService.statusLogin = true;
        this.Router.navigateByUrl("/home")
      });
  }
}
