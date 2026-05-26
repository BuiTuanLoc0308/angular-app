import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth/auth';
import { LoginRequest } from '../../models/login-request.model';

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
      email: ['', Validators.required],

      password: ['', Validators.required],
    });
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  get emailInvalid(): boolean {
    return !!(this.email?.invalid && this.email?.touched);
  }

  get passwordInvalid(): boolean {
    return !!(this.password?.invalid && this.password?.touched);
  }

  onLogin() {
    // kiem tra hop le
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();

      this.message = 'Vui lòng nhập đầy đủ thông tin';

      return;
    }

    // lay data
    const loginData: LoginRequest = this.loginForm.value;

    // goi api
    this.authService.login(loginData).subscribe({
      // thanh cong
      next: (response) => {
        this.message = 'Đăng nhập thành công';
      },

      // loi
      error: (error) => {
        console.log(error);

        if (error.status === 401) {
          this.message = 'Sai tài khoản hoặc mật khẩu';
        } else {
          this.message = 'Có lỗi xảy ra';
        }
      },
    });
  }
}
