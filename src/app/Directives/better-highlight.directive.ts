import {Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{

  //Only have the blue background only when i Hover the element and when i move away it must be transparent
  //We need to react to events occurring on the element the directive sits on by using @HostListener
  //@HostListener is a decorator that can be added to the method we want to execute
  //@HostListener('') can be triggered when an event happens and the event is specified as an argument through a string ' '

  constructor(private webRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(){
    // this.renderer.setStyle(this.webRef.nativeElement,
    //   'background-color','blue');
  }

  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';

  @HostListener('mouseenter') mouseover(eventData: Event){
    this.backgroundColor = 'blue';
  }

  @HostListener('mouseleave') mouseleave(eventData: Event){
    this.backgroundColor = 'transparent';
  }

  // @HostListener('mouseenter') mouseover(eventData: Event){
  //   this.renderer.setStyle(this.webRef.nativeElement, 'background-color','blue');
  // }
  //
  // @HostListener('mouseleave') mouseleave(eventData: Event){
  //   this.renderer.setStyle(this.webRef.nativeElement, 'background-color','transparent');
  // }

}
