import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateProductComponent } from './components/create-product/create-product.component';

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
];
