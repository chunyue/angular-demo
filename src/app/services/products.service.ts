import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { ProductsReponse } from '../../types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private apiService: ApiService) {}

  getProducts(url: string, options: any): Observable<ProductsReponse> {
    return this.apiService.get(url, options);
  }

  createProduct(
    url: string,
    body: any,
    options: any
  ): Observable<ProductsReponse> {
    return this.apiService.post(url, body, options);
  }
}
