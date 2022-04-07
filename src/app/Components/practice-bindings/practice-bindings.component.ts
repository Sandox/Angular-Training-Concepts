import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice-bindings',
  templateUrl: './practice-bindings.component.html',
  styleUrls: ['./practice-bindings.component.css']
})
export class PracticeBindingsComponent implements OnInit {

  username = '';
  constructor() { }

  ngOnInit(): void {
  }

  onResetUser(){
   this.username = '';
  }



}
