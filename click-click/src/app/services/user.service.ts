import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  addUser(data) {
    const { name } = data;
    return this.http
      .post(
        `http://localhost:4300/users`, { name: name }
      ).then((response: Response) => {
        return response;
      }).catch(error => console.log("Error occurred"));
  }
}
