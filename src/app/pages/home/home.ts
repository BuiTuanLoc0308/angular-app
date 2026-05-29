import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class HomeComponent {
  constructor(private router: Router) {}

  onPress1() {
    this.router.navigate(['/product']);
  }

  onPress2() {
    this.router.navigate(['/user']);
  }
}
