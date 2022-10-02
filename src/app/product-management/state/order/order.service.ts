import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { tap } from 'rxjs/operators';
import { Order } from '../../models/order.model';
import { OrderStore } from './order.store';

@Injectable({ providedIn: 'root' })
export class OrderService {

  constructor(private orderStore: OrderStore, private http: HttpClient) {
  }


  get() {
    return this.http.get<Order[]>('https://api.com').pipe(tap(entities => {
      this.orderStore.set(entities);
    }));
  }

  add(order: Order) {
    this.orderStore.add(order);
  }

  update(id: any, order: Partial<Order>) {
    this.orderStore.update(id, order);
  }

  remove(id: ID) {
    this.orderStore.remove(id);
  }

}
