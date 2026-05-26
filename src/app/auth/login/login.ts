import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth';
import { LoginRequest } from '../models/login-request.model';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.scss'],
})
export class LoginComponent {
  loginData: LoginRequest = {
    email: '',
    password: '',
  };

  message = '';

  constructor(private authService: AuthService) {}

  onLogin() {
    const result = this.authService.login(this.loginData);

    if (result) {
      this.message = 'Đăng nhập thành công';
    } else {
      this.message = 'Sai tài khoản hoặc mật khẩu';
    }
  }
}
