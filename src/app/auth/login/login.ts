import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../services/auth';
import { LoginRequest } from '../models/login-request.model';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.scss'],
})
export class LoginComponent {
  message = '';

  loginForm: FormGroup;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],

      password: ['', Validators.required],
    });
  }

  onLogin() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();

      this.message = 'Vui lòng nhập đầy đủ thông tin';

      return;
    }

    const loginData: LoginRequest = this.loginForm.value;

    const result = this.authService.login(loginData);

    if (result) {
      this.message = 'Đăng nhập thành công';
    } else {
      this.message = 'Sai tài khoản hoặc mật khẩu';
    }
  }
}
