import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {LoggingService} from "../../shared/logging-service.service";
import {AccountsService} from "../../shared/accounts.service";

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],

})
export class NewAccountComponent implements OnInit {

  constructor(private logService: LoggingService, private accountService: AccountsService) {}


  // @Output() newAccountAdded = new EventEmitter<{name: string, status: string}>();

 onCreateNewAccount(accountName: string, accountStatus: string){
     this.accountService.onAccountAdded(accountName, accountStatus);
      //this.logService.logStatusChangeToConsole(accountStatus);
   }


  ngOnInit(): void {
  }

}
