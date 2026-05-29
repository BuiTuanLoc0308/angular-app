import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductRequest } from '../../models/product-request.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'https://6a15332e91ff9a63de079ea8.mockapi.io/api/v1/products';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<ProductRequest[]> {
    return this.http.get<ProductRequest[]>(this.apiUrl);
  }
}
