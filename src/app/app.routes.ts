import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { ShowProductComponent } from './components/show-product/show-product.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';

export const routes: Routes = [
  {
    path: '',
    title: 'App Home Page',
    component: HomeComponent,
  },
  {
    path: 'admin/products/create',
    title: 'Create Product',
    component: CreateProductComponent,
  },
  {
    path: 'products/:productid',
    title: 'Show Product',
    component: ShowProductComponent,
  },
  {
    path: 'admin/products/:productid/edit',
    title: 'Edit Product',
    component: EditProductComponent,
  },
];
