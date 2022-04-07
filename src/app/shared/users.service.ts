import { Injectable } from '@angular/core';
import {Users} from "./user.model";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

 private users :Users[]= [
    {
      id:1,
      name:'King'
    },
    {
      id:210,
      name:'Chris'
    },
    {
      id:307,
      name:'Adam'
    },
  ];

  activeUsers = ['John','Patrick','Jane'];
  inactiveUsers = ['Bob','Peter'];

  setActiveUsers(id: number) {
    //reach out to the active users array and push a new element is in the inactive users array and is
    //the user with the id being received as arguments

    this.activeUsers.push(this.inactiveUsers[id]);
    //Using Splice method to the user will remove the element from that array
    this.inactiveUsers.splice(id, 1);
  }

  setInactiveUsers(id: number){
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id,1);
  }

  getAllUsers(){
    return this.users;
  }

  getUserById(id: number){
    const user = this.users.find((s)=>{
      return s.id === id;
    });
    return user;
  }


  constructor() { }
}
