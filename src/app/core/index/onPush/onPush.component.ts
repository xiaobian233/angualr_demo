import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-onPush',
  templateUrl: './onPush.component.html',
  styleUrls: ['./onPush.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush  //惰性组件
})
export class OnPushComponent implements OnInit {

  constructor(private cd: ChangeDetectorRef) { }
  arr:any[]=[
    {name:"1111",id:'1'},
    {name:"2222",id:'2'},
    {name:"3333",id:'3'},
    {name:"4444",id:'4'}
  ]
  ngOnInit() {

  }

  delete(id){
    let index=this.arr.findIndex(v=>v.id==id)
    this.arr.splice(index,1)
    // console.log(this.arr);
    // this.cd.markForCheck();
  }
}
