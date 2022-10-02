import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ProductDetail } from '../../models/product-detail.model';
import { ProductStore } from '../product/product.store';
import { ProductDetailStore } from './product-detail.store';

@Injectable({ providedIn: 'root' })
export class ProductDetailService {

  constructor(private productDetailStore: ProductDetailStore, private http: HttpClient,
    private productStore: ProductStore) {
  }


  get(id:number) {
    const url =`${environment.apiUrl}/product_items/${id}`;
   return this.http.get(url).pipe(
     tap({next: (response: any) => {
       if (response.success) {
         this.productDetailStore.set([response.data]);
       } else {
        console.log(response.error);
      }
     }, error: (err) => console.log(err)
      })
   )
 }
 show(id:number) {
  const url =`${environment.apiUrl}/products/${id}`;
 return this.http.get(url).pipe(
   tap({next: (response: any) => {
     if (response.success) {      
       this.productStore.set([response.data]);
     } else {
      console.log(response.error);
    }
   }, error: (err) => console.log(err)
    })
 )
}

  update(id: any, productDetail: Partial<ProductDetail>) {
    this.productDetailStore.update(id, productDetail);
  }

  remove(id: ID) {
    this.productDetailStore.remove(id);
  }

}
