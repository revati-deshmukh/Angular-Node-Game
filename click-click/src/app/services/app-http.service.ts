import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppHttpService {

  constructor(private http: HttpClient) { }

  getHeaders() {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    // TODO: token

    return headers;
  }

  get(url: string) {
    return this.http.get(url);
  }
}
