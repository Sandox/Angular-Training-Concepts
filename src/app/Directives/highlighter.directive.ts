import {Directive, ElementRef, OnInit} from "@angular/core";

@Directive({// Directive takes a selector so it can be used in template to attach to elements
 selector: '[appBasicHighlighter]'
  // [app-basic-highlighter] wrapping the selector with the []-property/attribute binding would give me the
  // ability to call it without putting it in []brackets to an element
})
export class HighlighterDirective implements OnInit {
  //We need access to where the element is that we want to pass this directive to/Sits on,
  //We are injecting the element into this directive by using ElementRef through the constructor()
  constructor(private elementWebReference: ElementRef) {}
  //private keyword makes the variable a property of the class and automatically assign the value[instance]to the property
  // to be use the variable through out the class


  ngOnInit(){//Element will highlighted to green.
    this.elementWebReference.nativeElement.style.backgroundColor = 'green';
  }
}

// Add the Directive on appModule.ts under the declarations array
