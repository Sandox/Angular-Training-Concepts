import {Component, Input, OnInit, EventEmitter, Output} from '@angular/core';
import {AccountsService} from "../../shared/accounts.service";
import {LoggingService} from "../../shared/logging-service.service";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent implements OnInit {

  constructor(private accountService: AccountsService, private logService: LoggingService) {
    this.account = {name: '', status:''}
    this.id =0;
    // this.accountService.statusUpdated.subscribe(
    //   (status:string) => alert('New Status' + status)
    // );
  }


  @Input() account: {name: string, status: string};
  @Input() id: number;
  // @Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();

  onChangeStatusTo(status: string){
    this.accountService.onStatusChanged(this.id, status);
    this.accountService.statusUpdated.emit(status);
    //this.logService.logStatusChangeToConsole(status);

    // this.statusChanged.emit({id: this.id, newStatus: status});
    // console.log('Account status changed, new Status: ' + status);
  }



  ngOnInit(): void {
  }

}
