import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor(private http: HttpClient) { }
  private url = "https://api.github.com/search/repositories?q="

  getResults(param): Observable<any> {
    return this.http.get<any>(this.url + "param");
  }
}
