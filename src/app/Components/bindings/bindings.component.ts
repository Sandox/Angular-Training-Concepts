import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bindings',
  templateUrl: './bindings.component.html',
  styleUrls: ['./bindings.component.css']
})
export class BindingsComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus ='No Server was created';
  serverName = '';

  constructor() {
    setTimeout(() =>{
      this.allowNewServer = true;
    },2000);
  }


  ngOnInit(): void {
  }

  onServerCreateStatus(){
    this.serverCreationStatus = 'Sever has been created, Name of Server is: ' + this.serverName;
  }

  onUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement> event.target).value;
  }

}
