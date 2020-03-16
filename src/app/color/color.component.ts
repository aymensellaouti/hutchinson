import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  defaultColor = 'blue';
  color: string;
  constructor() { }
  ngOnInit() {
  }
  changeColor(newColor: string) {
    this.color = newColor;
  }
  resetColor() {
    this.color = this.defaultColor;
  }
}
