import { Component, OnInit, HostListener } from '@angular/core';
import { trigger, state, transition, style, animate, keyframes } from "@angular/animations"
import { cardAnim, accelerateAnimate } from 'src/app/shared/amimate/animate';

@Component({
  selector: 'app-animate',
  templateUrl: './animate.component.html',
  styleUrls: ['./animate.component.css'],
  animations: [
    cardAnim,
    accelerateAnimate
  ]
})
export class AnimateComponent implements OnInit {
  animateState: string = "out"
  animateBol = false;
  constructor() { }

  ngOnInit() {

  }
  ngAfterViewInit(): void {
    // setTimeout.call(this, this.animateClick(), 2000)
  }
  animateClick() {
    if (this.animateState == "hover") return this.animateState = "out"
    this.animateState = "hover"
  }

  @HostListener('mouseenter',['$event.target'])
  onMouseenter(e){
    if (this.animateState == "hover") return this.animateState = "out"
    this.animateState = "hover"
  }



  

}
