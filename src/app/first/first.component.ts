import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  name = 'Aymen';
  nombreClick = 0;
  constructor() { }
  doSomeThing() {
  }
  ngOnInit() {
  }
  incrementNbClick() {
    this.nombreClick++;
  }
  changNbClick(newNbClick) {
    this.nombreClick = newNbClick;
  }
}
