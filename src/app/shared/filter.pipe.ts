import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: String, propName: string): any {
    if(value.length === 0 || filterString === ''){// only return the element where the status of the student matches the value of the filterString
      return value;// if it is empty return value and quit nothing to display
    }
    //Looping through all the items in the value property
    const resultArray = [];
    for (const item of value){
      //check if the status of each student [item[propName]]matches the filterString passed as argument
      if(item[propName] === filterString){
        resultArray.push(item);
      }
    }
    return resultArray;// only hold the items where the propName passed as an argument matches/ equals filteredString
  }

}
