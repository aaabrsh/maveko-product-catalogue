import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { tap } from 'rxjs/operators';
import { ProductCategory } from '../../models/product-category.model';
import { ProductCategoryStore } from './product-category.store';

@Injectable({ providedIn: 'root' })
export class ProductCategoryService {

  constructor(private productCategoryStore: ProductCategoryStore, private http: HttpClient) {
  }


  get() {
    return this.http.get<ProductCategory[]>('https://api.com').pipe(tap(entities => {
      this.productCategoryStore.set(entities);
    }));
  }

  add(productCategory: ProductCategory) {
    this.productCategoryStore.add(productCategory);
  }

  update(id: any, productCategory: Partial<ProductCategory>) {
    this.productCategoryStore.update(id, productCategory);
  }

  remove(id: ID) {
    this.productCategoryStore.remove(id);
  }

}
