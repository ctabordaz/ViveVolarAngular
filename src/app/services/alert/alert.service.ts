import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AlertService {

  private subject = new Subject<any>();
  private keepAfterNavigate = false;

  constructor(private router: Router) {
    router.events.subscribe(event => {
      if(event instanceof NavigationStart){
        if(this.keepAfterNavigate){
          this.keepAfterNavigate = false
        }else{
          this.subject.next();
        }
      }
    })
   }

   success(message: string, keepAfterNavigate = false){
     this.keepAfterNavigate = keepAfterNavigate;
     this.subject.next({type: 'success', text: message});
   }

   error(message: string, keepAfterNavigate = false){
    this.keepAfterNavigate = keepAfterNavigate;
    this.subject.next({type: 'error', text: message});
  }

  getMessage():Observable<any>{
    return this.subject.asObservable();
  }

}
