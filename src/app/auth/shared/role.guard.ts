import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  constructor(private service: AuthService, private router: Router){}

  canActivate() {
    if(this.service.haveAccess()){
      return true
    }else{
      this.router.navigate([''])
      return false      
    }
  }
}