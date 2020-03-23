import { Component, OnInit, HostListener } from '@angular/core';
import { trigger, state, transition, style, animate, keyframes } from "@angular/animations"

//尝试第一步 == 普通动画
const cardAnim = trigger('divAnimate1', [
  state('out', style({ transform: 'translate(10px) scale(1)', 'box-shadow': 'none', 'background': 'deepskyblue', "height": "50px" })),
  state('hover', style({ transform: 'translate(100px) scale(1.1)', 'box-shadow': '3px 3px 5px #ccc', 'background': '#FF34B3', "height": "150px" })),
  transition('out => hover', animate('100ms ease-in')),
  transition('hover => out', animate('100ms ease-out'))
]);

 
//尝试第二步 == 关键帧  (不需要自己手写动画 简单动画可以直接使用动画库里面的)
const accelerateAnimate = trigger('divAnimate2', [
  state('out', style({ transform: 'translate(10px,10px) scale(1)', 'box-shadow': 'none', 'background': 'deepskyblue', "height": "50px" })),
  state('hover', style({ transform: 'translate(100px,100px) scale(1.1)', 'box-shadow': '3px 3px 5px #ccc', 'background': '#FF34B3', "height": "150px" })),
  transition('out => hover', animate('1000ms ease-in',keyframes([
    style({ transform: 'translate(10px) scale(1)', "height": "55px" }),
    style({ transform: 'translate(20px) scale(1.1)', "height": "60px" }),
    style({ transform: 'translate(30px) scale(1.2)', "height": "65px" }),
    style({ transform: 'translate(40px) scale(1.3)', "height": "70px" }),
  ]))),
  transition('hover => out', animate('1000ms ease-out',keyframes([
    style({ transform: 'translate(100px) scale(1)', "height": "200px" }),
    style({ transform: 'translate(200px) scale(0.8)', "height": "300px" }),
    style({ transform: 'translate(300px) scale(0.6)', "height": "150px"}),
    style({ transform: 'translate(400px) scale(0.2)', "height": "100px"}),
  ])))
]);




@Component({
  selector: 'app-animate',
  templateUrl: './animate.component.html',
  styleUrls: ['./animate.component.css'],
  animations: [
    // trigger("divAnimate1",
    //   [
    //     state('green', style({ 'background': 'green', 'height': '20px', 'transform': 'translateX(0)' })),
    //     state('red', style({ 'background': "red", 'height': '100px', 'transform': 'translateX(100)' })),
    //     transition('green=>red', animate(1000)),
    //     transition('red=>green', animate(1000))
    //   ])
    cardAnim,
    accelerateAnimate
  ]
})
export class AnimateComponent implements OnInit {
  divAnimateState: string = "out"
  animateBol = false;
  constructor() { }

  ngOnInit() {

  }
  ngAfterViewInit(): void {
    // setTimeout.call(this, this.animateClick(), 2000)
  }
  animateClick() {
    if (this.divAnimateState == "hover") return this.divAnimateState = "out"
    this.divAnimateState = "hover"
  }


}
