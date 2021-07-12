import { localStoragetype } from './../../../type/signinTypes';
import { authService } from './../../../service/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sigin-page',
  templateUrl: './sigin-page.component.html',
  styleUrls: ['./sigin-page.component.scss'],
})
export class SiginPageComponent implements OnInit {
  constructor(private authService: authService) {}
  data = {
    email: 'admin12@gmail.com',
    password: '12345678',
  };
  ngOnInit(): void {
    this.showTitle();
  }
  showTitle() {
    this.authService
      .signIn(this.data.email, this.data.password)
      .subscribe((data) => {
        console.log(data);
      });
  }
}
