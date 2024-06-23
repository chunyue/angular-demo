import { Component } from '@angular/core';
import { Product } from '../../../types';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-product',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.scss',
})
export class EditProductComponent {
  productId: string | null = '';
  product: Product = {} as Product;
  isFileUploaded: boolean = false;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
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

  handleFileChange(event: any) {
    // 處理文件選擇邏輯
    this.isFileUploaded = true;
  }

  handleUpload(productId: string) {
    // 處理文件上傳邏輯
  }

  handleUpdate() {
    // 處理更新邏輯
    console.log('fire', this.product);

    this.productsService
      .updateProduct(
        `http://localhost:8080/products/${this.productId}`,
        this.product,
        {}
      )
      .subscribe((product: Product) => {
        console.log('更新成功');
        console.log(product);
        //重新抓取更新後的資料,不經過路由重新跳轉
        this.product = product;
      });
  }

  handleDelete() {
    // 處理刪除邏輯
    this.productsService
      .deleteProduct(`http://localhost:8080/products/${this.productId}`)
      .subscribe({
        error: (error) => {
          console.log('刪除失敗', error);
        },
        complete: () => {
          console.log('刪除完成');
          this.router.navigate(['/']);
        },
      });
  }
}
