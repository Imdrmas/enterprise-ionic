import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../modal/Modal';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  createUser(user: User): Observable<any> {
    return this.http.post<any>(
      `http://localhost:8080/api/createUser`,
      user
    );
  }

  findUsers(): Observable<any[]> {
    return this.http.get<any[]>(
      `http://localhost:8080/api/findUsers`
    );
  }
}
