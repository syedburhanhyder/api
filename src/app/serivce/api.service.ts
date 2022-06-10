import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
// url='https://api.stackexchange.com/2.3/search/advanced?';
// urlx='https://api.stackexchange.com/2.3/search/advanced?order=desc&sort=activity&site=stackoverflow';
  constructor(private http:HttpClient) { }

  fetchResults(url:string){
    return this.http.get(url);

  }
}
