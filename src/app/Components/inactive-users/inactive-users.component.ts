import {Component, OnInit} from '@angular/core';
import {UsersService} from "../../shared/users.service";

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {

  users: string[] = [];

  constructor(private service: UsersService) { }

  onSetUserToActive(id: number){
    this.service.setActiveUsers(id);
  }

  ngOnInit(): void {
    this.users = this.service.inactiveUsers;
  }

}
