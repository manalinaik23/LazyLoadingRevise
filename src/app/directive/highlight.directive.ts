import { Directive,HostListener,ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(public el:ElementRef) { }
   @Input()
   appHighlight:any;

  @HostListener('mouseenter') onMouseEnter(){
     this.highlight(this.appHighlight);
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.highlight('');
  }

  highlight(color:string){
    this.el.nativeElement.style.backgroundColor=color;
  }

}
