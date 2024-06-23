import { Component } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Product, ProductsReponse } from '../../types';
import { ProductComponent } from '../components/product/product.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(private productsService: ProductsService) {}

  //分頁所需參數
  currentPage: number = 1;
  totalPages: number = 1;
  pageOffset: number = 0;
  pageLimit: number = 5;
  totalProducts: number = 0;

  products: Product[] = [];
  ngOnInit() {
    this.fetchProducts();
    console.log(this.products);
  }
  fetchProducts(): void {
    this.productsService
      .getProducts(
        `http://localhost:8080/products?offset=${this.pageOffset}`,
        {}
      )
      .subscribe((productsResponse: ProductsReponse) => {
        console.log(productsResponse);
        this.products = productsResponse.results;
        this.totalProducts = Number(productsResponse.total);
        this.pageLimit = Number(productsResponse.limit);
        this.pageOffset = Number(productsResponse.offset);
        this.currentPage =
          Math.floor(
            Number(productsResponse.offset) / Number(productsResponse.limit)
          ) + 1;
        this.totalPages = Math.ceil(
          Number(productsResponse.total) / Number(productsResponse.limit)
        );
      });
  }

  //下一頁
  nextPage(currentPage: number, pageLimit: number) {
    this.pageOffset = currentPage * pageLimit;
    this.fetchProducts();
  }

  //上一頁
  previousPage(currentPage: number, pageLimit: number) {
    if (currentPage > 2) {
      this.pageOffset = (currentPage - 2) * pageLimit;
      this.fetchProducts();
    } else {
      this.pageOffset = 0;
      this.fetchProducts();
    }
  }
}
