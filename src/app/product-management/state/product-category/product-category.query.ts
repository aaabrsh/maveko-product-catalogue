import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { ProductCategoryStore, ProductCategoryState } from './product-category.store';

@Injectable({ providedIn: 'root' })
export class ProductCategoryQuery extends QueryEntity<ProductCategoryState> {

  constructor(protected override store: ProductCategoryStore) {
    super(store);
  }

}
