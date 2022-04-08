import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform {
  transform(value: any, limit: number){// transform method receives the value to transform as an argument and must return something
    if(value.length > limit){
      return value.substr(0,limit) + ' ...';
      //return a new string that will contain the old value but shorten by using the substr method which takes
      //(index number we want to start displaying from [0] beginning and the length-- how many characters to display)
    }
    return value;
  }
}
