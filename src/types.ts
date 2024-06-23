import { HttpContext, HttpHeaders, HttpParams } from '@angular/common/http';

export interface Options {
  headers?:
    | HttpHeaders
    | {
        [header: string]: string | string[];
      };
  observe: 'body';
  context?: HttpContext;
  params?:
    | HttpParams
    | {
        [param: string]:
          | string
          | number
          | boolean
          | ReadonlyArray<string | number | boolean>;
      };
  reportProgress?: boolean;
  responseType?: 'json';
  withCredentials?: boolean;
  transferCache?:
    | {
        includeHeaders?: string[];
      }
    | boolean;
}

export interface ProductsReponse {
  limit: string;
  offset: string;
  total: string;
  results: Product[];
}

export interface Product {
  productId: string;
  productName: string;
  category: string;
  imageUrl: string;
  price: number;
  stock: number;
  description: string;
  createdDate: string;
  lastModifiedDate: string;
}
