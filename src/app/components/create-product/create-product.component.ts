import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Product, ProductsReponse } from '../../../types';
import { ProductsService } from '../../services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-product',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.scss',
})
export class CreateProductComponent {
  constructor(
    private productsService: ProductsService,
    private router: Router
  ) {}

  createProductForm = new FormGroup({
    productName: new FormControl('', Validators.required),
    category: new FormControl(''),
    price: new FormControl(''),
    stock: new FormControl(''),
    description: new FormControl(''),
    imageUrl: new FormControl(''),
  });
  onsubmit() {
    console.log('fire');
    console.log(this.createProductForm.value);

    this.productsService
      .createProduct(
        `http://localhost:8080/products`,
        this.createProductForm.value,
        {}
      )
      .subscribe((product: Product) => {
        //轉址到show-product
        this.router.navigate(['products', product.productId]);
      });
  }
}
