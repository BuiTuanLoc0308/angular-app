import { Injectable } from '@angular/core';
import { LoginRequest } from '../../models/login-request.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'https://api-edufa.b2ssolution.com/v1/auth/login';

  constructor(private http: HttpClient) {}

  login(data: LoginRequest): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
}
