import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from "rxjs";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent implements OnInit, OnDestroy{

  private firstSubscription: Subscription = new Subscription;
  constructor() {
  }

  ngOnInit(): void {

    const customMyObservables = Observable.create(observer => {
      // We need to inform the observer when the observable is completed or an error.
      let count = 0;
      setInterval(() => {
        observer.next(count);//emits a new value.
        if(count === 2){
          observer.complete();
        }
        if(count > 3){
          observer.error(new Error('Count is larger than 3'))
        }
        count++;
      }, 1000);
    });

    this.firstSubscription = customMyObservables.pipe(map((data: number) => {
      return 'Round: ' + (data + 1);
    })).subscribe(data => {
      console.log(data);
    }, error => {console.log(error);
      alert(error.message);
    },()=>{
      console.log("Observable Completed");
    });


    // customMyObservables.subscribe(data => {
    //   console.log(data);
    // }, error => {console.log(error);
    //   alert(error.message);
    // },()=>{
    //   console.log("Observable Completed");
    // });
  }

  ngOnDestroy():void {
    this.firstSubscription.unsubscribe();//
  }

}
