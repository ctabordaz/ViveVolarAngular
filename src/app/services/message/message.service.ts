import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class MessageService {

  private _listners = new Subject<any>(); 

  constructor() { }

    listen(): Observable<any> {
        return this._listners.asObservable();
    }

    recive(data: any) {
      if(data){
        this._listners.next(data);
      }
        
    }
  

}
