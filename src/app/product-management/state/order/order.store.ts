import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Order } from '../../models/order.model';

export interface OrderState extends EntityState<Order> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'order' })
export class OrderStore extends EntityStore<OrderState> {

  countValue:number= 0;
  constructor() {
    super();
  }

}
