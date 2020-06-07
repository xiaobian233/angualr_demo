import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngModel',
  templateUrl: './ngModel.component.html',
  styleUrls: ['./ngModel.component.css']
})
export class NgModelComponent implements OnInit {
  value:string="你是个大锤子 !"
  radioValue:string="A"
  constructor() { }

  ngOnInit() {
  }

}
