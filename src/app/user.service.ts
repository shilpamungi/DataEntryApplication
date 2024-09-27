import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:8080/api/persons';  // Backend API URL
  private message: string = '';

  constructor(private http: HttpClient) { }

  saveUserData(userData: any): Observable<any> {
    return this.http.post(this.apiUrl+"/submit", userData);
  }

  getUserData(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  setMessage(msg: string) {
    this.message = msg;
  }

  getMessage(): string {
    return this.message;
  }
}
