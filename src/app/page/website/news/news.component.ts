import { newService } from './../../../service/new.service';
import { NewsType } from './../../../type/newsTypes';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {
  news: NewsType[];
  constructor(private newService : newService) {}
  ngOnInit(): void {
    this.getAllNews()
  }
  getAllNews(){   
    this.newService.getNews().subscribe(data =>{this.news = data ; console.log(data);
    })
  }

}
