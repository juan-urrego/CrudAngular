import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../models/tutorial.model';

const baseUrl = 'http://localhost:9090/employee';

@Injectable({
  providedIn: 'root'
})
export class TutorialService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${baseUrl}/list`);
  }

  get(id: number): Observable<Employee> {
    return this.http.get<Employee>(`${baseUrl}/${id}`);
  }

  create(data: Employee, seniority: number): Observable<any> {
    return this.http.post(`${baseUrl}/save/${seniority}`, data);
  }

  update(id: number, data: Employee, seniority: number): Observable<any> {
    return this.http.put(`${baseUrl}/update/${id}/${seniority}`, data);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${baseUrl}/delete/${id}`);
  }

}
