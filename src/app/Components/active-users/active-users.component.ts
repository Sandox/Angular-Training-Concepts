import { Component, OnInit } from '@angular/core';
import {UsersService} from "../../shared/users.service";

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {

  users: string[] = [];

  constructor(private service: UsersService) { }

  ngOnInit(): void {
    this.users = this.service.activeUsers;
  }

  onSetUserToActive(id: number){
    this.service.setInactiveUsers(id);
  }



}
