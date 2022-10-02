import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  proceedLogin(usercred: any){
    // console.log(usercred)
    return this.http.post('https://product-catalog-api.onrender.com/login', usercred)
  }

  proceedRegister(usercred: any){
    // console.log(usercred)
    return this.http.post('https://product-catalog-api.onrender.com/sign_up', {payload: usercred})
  }

  isLoggedIn(){
    return localStorage.getItem('token') != null;
  }

  getToken(){
    return localStorage.getItem('token') || '';
  }

  haveAccess(){
    var logginToken = localStorage.getItem('token') || '';
    
    var _extractedToken = logginToken.split('.')[1];
    var _atobdata = atob(_extractedToken);
    var _finaldata = JSON.parse(_atobdata);

    // console.log(_finaldata)
    if(_finaldata.user_type == 'Admin'){
      return true;
    }else{
      alert('not authorized');
      return false;
    }
  }
}
