import { Component, OnInit } from '@angular/core';
import {UsersService} from "../../../shared/users.service";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.css']
})
export class EditUsersComponent implements OnInit {
  user : {id: number, name: string} ;
  name = '';
  allowEdit = false;


  constructor(private userService: UsersService,
              private router: Router,
              private route: ActivatedRoute) {
    this.user = {id:0,name: ''};}

  ngOnInit(): void {
    console.log(this.route.snapshot.queryParams);
    console.log(this.route.snapshot.fragment);
    this.route.queryParams.subscribe((queryParams: Params) => {
      this.allowEdit = queryParams['allowEdit']  === '2' ? true : false;
    });
    this.route.fragment.subscribe();
    const id = + this.route.snapshot.params['id'];// gets the ID from the activedRoute from the snapshot and ID is on the URL
    //this.user = this.userService.getUserById(id);
    this.name = this.user.name;
  }



}
