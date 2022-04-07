import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user : {id: number, name: string};

  constructor(private currentRoute: ActivatedRoute) {
    this.user = {id:0,name: ''};
  }

  ngOnInit(): void {
    // this.user = {
    //   id: this.currentRoute.snapshot.params['id'],// value is fetched from our route on the snapshot property
    //   name: this.currentRoute.snapshot.params['name']
    // };
    this.currentRoute.params.subscribe((params: Params) =>{
      this.user.id = params['id'],// value is fetched from our route on the snapshot property
        this.user.name = params['name'],
        this.currentRoute.snapshot.params['name']
    });
  }

}
