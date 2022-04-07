import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-single-element',
  templateUrl: './single-element.component.html',
  styleUrls: ['./single-element.component.css']
})
export class SingleElementComponent implements OnInit {

  //Type script syntax for defining an object type - To make sure that property can only have this Type
 //element: { type: string; name: string; content: string; };
  //By default properties in a components are only accessible inside the component and not outside


 @Input('theUser')  username: string ='';

  constructor() { }

  ngOnInit(): void {
  }

}
