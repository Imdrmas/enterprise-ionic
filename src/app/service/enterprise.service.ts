import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Enterprise } from '../modal/Modal';

@Injectable({
  providedIn: 'root'
})
export class EnterpriseService {

  constructor(private http: HttpClient) { }

  createEnterprise(enterprise: Enterprise): Observable<any> {
    return this.http.post<any>(
      `http://localhost:8080/api/createEnterprise`,
      enterprise
    );
  }

  findEnterprises(): Observable<any[]> {
    return this.http.get<any[]>(
      `http://localhost:8080/api/findEnterprises`,
    );
  }

  findEnterprise(id: number): Observable<any> {
    return this.http.get<any>(
      `http://localhost:8080/api/findEnterprise/${id}`,
    );
  }
  deleteEnterprise(id: number): Observable<any> {
    return this.http.delete<any>(
      `http://localhost:8080/api/deleteEnterprise/${id}`,
    );
  }
  calculateJava(id: number): Observable<any> {
    return this.http.get<any>(
      `http://localhost:8080/api/calculateJava/${id}`,
    );
  }
  calculateLow(id: number): Observable<any> {
    return this.http.get<any>(
      `http://localhost:8080/api/calculateLow/${id}`,
    );
  }
  calculateMedium(id: number): Observable<any> {
    return this.http.get<any>(
      `http://localhost:8080/api/calculateMedium/${id}`,
    );
  }
  calculatePhp(id: number): Observable<any> {
    return this.http.get<any>(
      `http://localhost:8080/api/calculatePhp/${id}`,
    );
  }
  calculateHigh(id: number): Observable<any> {
    return this.http.get<any>(
      `http://localhost:8080/api/calculateHigh/${id}`,
    );
  }
  calculateJavascript(id: number): Observable<any> {
    return this.http.get<any>(
      `http://localhost:8080/api/calculateJavascript/${id}`,
    );
  }
}
