import { Component, OnInit } from '@angular/core';
import { ProductRequest } from '../../models/product-request.model';
import { ProductService } from '../../services/products/product';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './product.html',
  styleUrl: './product.scss',
})
export class ProductComponent {
  products$: Observable<ProductRequest[]>;

  constructor(private productService: ProductService) {
    this.products$ = this.productService.getProducts();
  }
}
