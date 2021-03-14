import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicationServiceService {

  private componentMethodCallSource = new Subject<any>();
  
  componentMethodCalled$ = this.componentMethodCallSource.asObservable();

  constructor() { }

  getIsActive():void{
    console.log('Called service method');
    this.componentMethodCallSource.next();
  }

  
}
