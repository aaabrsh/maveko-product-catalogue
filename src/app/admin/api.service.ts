import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  productCategoryPost(data: any){
    return this.http.post('https://product-catalog-api.onrender.com/categories', {payload: data})
  }
}
