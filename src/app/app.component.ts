import { Component } from '@angular/core';
import {AccountsService} from "./shared/accounts.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  serverElements = [
    {type: 'server', name: 'TestingServer', content: 'This is just for Testing!'}
  ];

  usernames: string[] = [];
  username: string ='';

  currentSpeed: number = 100;


  title = 'max-app';

  addUsername(){
    this.usernames.push(this.username);
    console.log(`The Username added is: ${this.username}`);
  }

  onSpeedChange(buttonType: string){
    buttonType ==="INC" ? this.currentSpeed + 1 : this.currentSpeed-1;
    console.log(this.currentSpeed);
  }



  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  onIntervalFired(numberFired: number){
    if(numberFired % 2 === 0){
      this.evenNumbers.push(numberFired);
    }else{
      this.oddNumbers.push(numberFired);
    }
    console.log(numberFired);
  }

accounts: {name: string, status: string}[] = [];

  constructor(private service: AccountsService){}

  //Gives us the access to the accounts
  ngOnInit(){
    this.accounts = this.service.accounts;
  }

}
