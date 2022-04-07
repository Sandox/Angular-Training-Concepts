import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  showNickname = false;
  log: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  onToggleDetails(){
    this.showNickname = !this.showNickname;
    this.log.push(this.log.length + 1);
    console.log(this.log);
  }

}
