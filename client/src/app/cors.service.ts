import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

export interface Cors {
  readonly answer: string;
}

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CorsService {

  private url = 'http://localhost:8000/api/cors';

  constructor(private http: HttpClient) {}

  public doGet(): Observable<Cors> {
    return this.http.get<Cors>(this.url, httpOptions);
  }

  public doPost(obj: object): Observable<Cors> {
    return this.http.post<Cors>(this.url, obj, httpOptions);
  }
}
