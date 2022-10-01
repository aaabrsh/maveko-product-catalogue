import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { ProductCategory } from '../../models/product-category.model';

export interface ProductCategoryState extends EntityState<ProductCategory> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'product-category' })
export class ProductCategoryStore extends EntityStore<ProductCategoryState> {

  constructor() {
    super();
  }

}
