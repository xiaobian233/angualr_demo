import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-Rxjs',
  templateUrl: './Rxjs.component.html',
  styleUrls: ['./Rxjs.component.css']
})
export class RxjsComponent implements OnInit {
  constructor(private el:ElementRef) { }

  ngOnInit() {
    
  }

  ngAfterContentInit(): void {
      this.el.nativeElement.querySelector('#height')
  }

  rxjs(){
    // 创建类操作符
    // form:可以把数组,promise,以及Iterable转化为Observable;
    // fromEvent: 可以把事件转化为Observable;
    // of: 接受一系列的数据,并将他们emit出去

    // 转换操作符
    // map,mapTo,pluck
    // map(v=>v)
    // mapTo(1)
    // of()

    

  }



}
