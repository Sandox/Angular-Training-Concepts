import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-direct-app',
  templateUrl: './new-direct-app.component.html',
  styleUrls: ['./new-direct-app.component.css']
})
export class NewDirectAppComponent implements OnInit {


    oddNumbers = [1,3,5];
    evenNumbers = [2,4,6];
  isOnlyOddNumers = false;
  constructor() { }

  ngOnInit(): void {
  }

}
