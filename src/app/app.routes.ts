import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { ShowProductComponent } from './components/show-product/show-product.component';

export const routes: Routes = [
  {
    path: '',
    title: 'App Home Page',
    component: HomeComponent,
  },
  {
    path: 'create-product',
    title: 'Create Product',
    component: CreateProductComponent,
  },
  {
    path: 'product/:productid',
    title: 'Show Product',
    component: ShowProductComponent,
  },
];
