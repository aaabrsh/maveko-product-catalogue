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

  productPost(data: any){
    return this.http.post('https://product-catalog-api.onrender.com/products', {payload: data})
  }

  supplierPost(data: any){
    return this.http.post('https://product-catalog-api.onrender.com/suppliers', {payload: data})
  }

  currencyPost(data: any){
    return this.http.post('https://product-catalog-api.onrender.com/currencies', {payload: data})
  }

  unitOfMeasurePost(data: any){
    return this.http.post('https://product-catalog-api.onrender.com/unit_of_measure', {payload: data})
  }

  addressPost(data: any){
    return this.http.post('https://product-catalog-api.onrender.com/addresses', {payload: data})
  }

  contactPost(data: any){
    return this.http.post('https://product-catalog-api.onrender.com/contact_informations', {payload: data})
  }

  customerPost(data: any){
    return this.http.post('https://product-catalog-api.onrender.com/customers', {payload: data})
  }
}
