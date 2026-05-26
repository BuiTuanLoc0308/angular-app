import { Component, signal } from '@angular/core';
import { LoginComponent } from './pages/login/login';

@Component({
  selector: 'app-root',
  imports: [LoginComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('angular-app');
}
