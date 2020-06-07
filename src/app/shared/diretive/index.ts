import { Directive, Renderer2, ElementRef, HostListener, Input, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[isShow]'
})
export class DiretiveDirective {
  @Input() isShow = false;
  constructor(private rd2: Renderer2, private el: ElementRef) { }
  @HostListener('click', ['$event.target'])
  onClick(ev) {
    console.log(ev, "指令绑定---div", this.isShow);
    if (!this.isShow) this.rd2.setStyle(this.el.nativeElement, 'display', "block")
    if (this.isShow) this.rd2.setStyle(this.el.nativeElement, 'display', "none")
    this.isShow = !this.isShow;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.onClick(this.el.nativeElement)
  }

}



