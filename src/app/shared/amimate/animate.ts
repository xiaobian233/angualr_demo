
import { trigger, state, transition, style, animate, keyframes } from "@angular/animations"

//尝试第一步 == 普通动画
export const cardAnim = trigger('animate1', [
    state('out', style({ transform: 'translate(10px) scale(1)', 'box-shadow': 'none', 'background': 'deepskyblue', "height": "50px" })),
    state('hover', style({ transform: 'translate(100px) scale(1.1)', 'box-shadow': '3px 3px 5px #ccc', 'background': '#FF34B3', "height": "150px" })),
    transition('out => hover', animate('100ms ease-in')),
    transition('hover => out', animate('100ms ease-out'))
]);


//尝试第二步 == 关键帧  (不需要自己手写动画 简单动画可以直接使用动画库里面的)
export const accelerateAnimate = trigger('animate2', [
    state('out', style({ transform: 'translate(10px,10px) scale(1)', 'box-shadow': 'none', 'background': 'deepskyblue', "height": "50px" })),
    state('hover', style({ transform: 'translate(100px,100px) scale(1.1)', 'box-shadow': '3px 3px 5px #ccc', 'background': '#FF34B3', "height": "150px" })),
    transition('out => hover', animate('1000ms ease-in', keyframes([
        style({ transform: 'translate(10px) scale(1)', "height": "55px" }),
        style({ transform: 'translate(20px) scale(1.1)', "height": "60px" }),
        style({ transform: 'translate(30px) scale(1.2)', "height": "65px" }),
        style({ transform: 'translate(40px) scale(1.3)', "height": "70px" }),
    ]))),
    transition('hover => out', animate('1000ms ease-out', keyframes([
        style({ transform: 'translate(100px) scale(1)', "height": "200px" }),
        style({ transform: 'translate(200px) scale(0.8)', "height": "300px" }),
        style({ transform: 'translate(300px) scale(0.6)', "height": "150px" }),
        style({ transform: 'translate(400px) scale(0.2)', "height": "100px" }),
    ])))
]);

// //尝试第三步 == 路由动画
// export const routerAnimate = trigger('routerAnimate', [
//     state('void', style({ 'position': 'fixed' })),
//     state('*', style({ 'position': 'fixed' })),
//     transition('void=>*', [
//         style({ transform: 'translate(-100%)' }),
//         animate('1000ms ease-in', style({ transform: 'translate(0%)' }))
//     ]),
//     transition('*=>void', [
//         style({ transform: 'translate(0%)' }),
//         animate('1000ms ease-in', style({ transform: 'translate(100%)' }))
//     ])
// ])




