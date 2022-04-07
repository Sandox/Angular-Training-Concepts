import { Component, OnInit } from '@angular/core';
import {UsersService} from "../../../shared/users.service";
import {Users} from "../../../shared/user.model";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {
  users: Users[] =[];
  user : {id: number, name: string} | undefined;

  constructor(private service: UsersService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.users = this.service.getAllUsers();


    const id = + this.route.snapshot.params['id'];// gets the ID from the activedRoute from the snapshot and ID is on the URL
    this.user = this.service.getUserById(id);// Pass the ID from the URL to get the User
    this.route.params.subscribe((params: Params) => {
      this.user = this.service.getUserById(+ params['id']) //Subscribe to the event when ever there is a change triggered on the page
    });

  }

  onEditUser(){
    this.router.navigate(['edit'], {relativeTo: this.route, queryParamsHandling: "preserve"});
  }

}
