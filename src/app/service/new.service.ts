import { Injectable ,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs'
import { NewsType } from '../type/newsTypes';
@Injectable()
export class newService {
  constructor(private http: HttpClient) {
  }
  ngOnInit(){
  }
  api_News_Url = 'https://headphoneapi.herokuapp.com/api/news'
  getNews():Observable<NewsType[]>{
        return this.http.get<NewsType[]>(this.api_News_Url)
  }
}
