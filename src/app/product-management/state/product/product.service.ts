import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Product } from '../../models/product.model';
import { ProductDetailStore } from '../product-detail/product-detail.store';
import { ProductStore } from '../product/product.store';

@Injectable({ providedIn: 'root' })
export class ProductService {

  constructor(private productStore: ProductStore, private http: HttpClient,
              private productDetailStore:ProductDetailStore) {
  }


  get() {
    const url =`${environment.apiUrl}/products`;
    return this.http.get(url).pipe(
      tap({next: (response: any) => {
        if (response.success) {
          this.productStore.set(response.data);
        } else {
          console.log(response.error)
       }
      }, error: (err) => console.log(err)
       })
    )
  }
  search(payload:any) {
    const url =`${environment.apiUrl}/search`;
    return this.http.post(url,payload).pipe(
      tap({next: (response: any) => {
        if (response.success) {
          console.log(response.data);
          
          this.productStore.set(response.data);
        } else {
          console.log(response.error)
       }
      }, error: (err) => console.log(err)
       })
    )
  }



  add(product: Product) {
    this.productStore.add(product);
  }

  update(id: any, product: Partial<Product>) {
    this.productStore.update(id, product);
  }

  remove(id: ID) {
    this.productStore.remove(id);
  }

}
