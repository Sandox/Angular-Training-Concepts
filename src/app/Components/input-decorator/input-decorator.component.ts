import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-input-decorator',
  templateUrl: './input-decorator.component.html',
  styleUrls: ['./input-decorator.component.css']
})
export class InputDecoratorComponent implements OnInit {

  @Output() changeSpeed : EventEmitter<String> = new EventEmitter<String>();
  currentSpeed: number = 100;


  constructor() {
  }

  ngOnInit(): void {
  }

  onHandleSpeed(speedOperation: string){
    this.changeSpeed.emit(speedOperation);
    speedOperation ==="INC" ? this.currentSpeed + 1 : this.currentSpeed -1
    console.log(speedOperation);
  }

}
