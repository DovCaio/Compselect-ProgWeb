import { Injectable } from '@angular/core';
import  { HttpClient } from '@angular/common/http';
import { URL } from '../../config/urlBackend';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }


  getStatistics(wichStatistics: string) {
    return this.http.get<number>(`${URL}/statistics/${wichStatistics}`)
  }

  getCommentsAverage() {
    return this.http.get<number>(`${URL}/statistics/comments/average-per-post`);
  }

}
