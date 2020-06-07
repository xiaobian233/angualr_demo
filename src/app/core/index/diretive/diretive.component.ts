import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretive',
  templateUrl: './diretive.component.html',
  styleUrls: ['./diretive.component.css']
})
export class DiretiveComponent implements OnInit {

  constructor() { }
  isShow = false;
  ngOnInit() {
  }

  click() {
    this.isShow = !this.isShow;
  }

}
