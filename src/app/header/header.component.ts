import { authService } from './../service/auth.service';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user = localStorage.getItem("user")
  constructor(
    private authService : authService,
    private Router : Router
  ) { }
  status : boolean = false
  isOpenStatus : boolean = false
  ngOnInit(): void {
    if(localStorage.getItem("user")){
      this.authService.statusLogin = true
      this.status = this.authService.statusLogin
      console.log("true");
    }
    else{
      this.authService.statusLogin = false
      this.status = this.authService.statusLogin
      console.log("false");
      
    }
    this.status
  }
  isOpen(){
    this.isOpenStatus = !this.isOpenStatus
    console.log(this.isOpenStatus);
    this.status
  }
  handleLogout(){
    localStorage.removeItem("user")
    this.Router.navigateByUrl("/signin")
  }


}
