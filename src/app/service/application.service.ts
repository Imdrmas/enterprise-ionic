import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Application } from '../modal/Modal';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  constructor(private http: HttpClient) { }

  createApplication(application: Application, id: number): Observable<any> {
    return this.http.post<any>(
      `http://localhost:8080/api/createApplication/${id}`,
      application
    );
  }

  createApplicationForEnterprise(idApplication: number, id: number): Observable<any> {
    return this.http.post<any>(
      `http://localhost:8080/api/createApplicationForEnterprise/${idApplication}/${id}`,
      null
    );
  }

  findApplications(): Observable<any[]> {
    return this.http.get<any[]>(
      `http://localhost:8080/api/findApplications/`,
    );
  }
  findApplicationsForEnterprise(id: number): Observable<any[]> {
    return this.http.get<any[]>(
      `http://localhost:8080/api/findApplicationsForEnterprise/${id}`,
    );
  }
  findApplication(id: number): Observable<any> {
    return this.http.get<any>(
      `http://localhost:8080/api/findApplication/${id}`,
    );
  }
  deleteApplication(id: number): Observable<any> {
    return this.http.delete<any>(
      `http://localhost:8080/api/deleteApplication/${id}`,
    );
  }

}
