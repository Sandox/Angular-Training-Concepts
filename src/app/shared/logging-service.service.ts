import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  logStatusChangeToConsole(status: string){
    console.log('Account status changed, new Status: ' + status);

  }
  constructor() { }
}
