import { Component, OnInit } from '@angular/core';
import { ProductRequest } from '../../models/product-request.model';
import { ProductService } from '../../services/products/product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './product.html',
  styleUrl: './product.scss',
})
export class ProductComponent implements OnInit {
  products: ProductRequest[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe({
      next: (response) => {
        console.log(response);

        this.products = response;
      },

      error: (err) => {
        console.log(err);
      },
    });
  }
}
