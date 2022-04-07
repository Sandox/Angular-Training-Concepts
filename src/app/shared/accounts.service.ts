import { Injectable, EventEmitter } from '@angular/core';
import {LoggingService} from "./logging-service.service";

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  accounts = [
    {
      name: 'Mastercard Debit Account',
      status: 'active'
    },
    {
      name: 'Mastercard Credit Card ',
      status: 'inactive'
    },
    {
      name: '32 Days Savings Account',
      status: 'active'
    },
  ];

  statusUpdated = new EventEmitter<string>();

  onAccountAdded(AccountName: string, AccountStatus: string){
    this.accounts.push({name: AccountName, status: AccountStatus});
    this.logService.logStatusChangeToConsole(AccountStatus);

  }

  onStatusChanged(id:number, newStatus: string){
    this.accounts[id].status = newStatus;
    this.logService.logStatusChangeToConsole(newStatus);

  }

  constructor(private logService: LoggingService) { }
}
