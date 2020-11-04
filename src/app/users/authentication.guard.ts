import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';



import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
   constructor() {
   }

   canActivate():boolean{
    if(sessionStorage.getItem("userName")!=null && sessionStorage.getItem("userName")!=""){
        return true;
      }
      else
      {
        return false;
      }
   }

}
