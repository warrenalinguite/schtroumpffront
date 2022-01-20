import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:3000/api/appartoo/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class SchtroumpfsService {
  constructor(private http: HttpClient) { }

  getAllSchtroumpfs(): Observable<any> {
    return this.http.get(API_URL , httpOptions);
  }

  getOneSchtroumpfs(): Observable<any> {
    return this.http.get(API_URL + 'profil', httpOptions);
  }

  modifyRole(role:any): Observable<any> {
    return this.http.put(API_URL + 'profile', role,httpOptions);
  }

  deleteFriend(id:any): Observable<any> {
    let url = `deletefriend/${id}`
    return this.http.put(API_URL + url, httpOptions);
  }

  addFriend(id:any): Observable<any> {
    let url = `addfriend/${id}`
    return this.http.put(API_URL + url, httpOptions);
  }
}
