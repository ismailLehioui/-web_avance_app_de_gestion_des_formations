import { ActivatedRouteSnapshot ,CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

export class authGuard implements CanActivate {
  constructor( private _auth: AuthService, private router: Router ){}
 
  canActivate() {

    if(this._auth.isLoggedIn()){
      return true;
    }else{
      this.router.navigate(['/login']);
      return false
    }

  }
};
