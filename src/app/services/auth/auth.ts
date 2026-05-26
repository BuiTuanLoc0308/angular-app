import { Injectable } from '@angular/core';
import { LoginRequest } from '../../models/login-request.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'https://6a15332e91ff9a63de079ea8.mockapi.io/api/v1/login';

  constructor(private http: HttpClient) {}

  login(data: LoginRequest): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
}
