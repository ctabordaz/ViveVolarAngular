import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { User } from '../../models/user';
import { AppConfig } from '../../app.config';

@Injectable()
export class MenuGuard implements CanActivate{

  private config : AppConfig = new AppConfig() 
  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    let currentUser: User = JSON.parse(localStorage.getItem('currentUser'));
    if(this.config.roles[currentUser.Rol]){
        return this.config.roles[currentUser.Rol].some((e,i,a) => {return e == state.url;});
    }

    return false;
  }
  

}
