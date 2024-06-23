import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../../types';

@Component({
  selector: 'app-show-product',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './show-product.component.html',
  styleUrl: './show-product.component.scss',
})
export class ShowProductComponent implements OnInit {
  productId: string | null = '';
  product: Product = {} as Product;
  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) {}
  ngOnInit(): void {
    this.productId = this.route.snapshot.paramMap.get('productid');

    this.productsService
      .getProduct(`http://localhost:8080/products/${this.productId}`, {})
      .subscribe((product: Product) => {
        console.log(product);
        this.product = product;
      });
  }
}
