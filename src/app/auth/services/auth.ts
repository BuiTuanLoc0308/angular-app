import { Injectable } from '@angular/core';
import { LoginRequest } from '../models/login-request.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  login(data: LoginRequest): boolean {
    // Fake login demo
    if (data.email === 'admin@gmail.com' && data.password === '123456') {
      return true;
    }

    return false;
  }
}
