import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-ngstyle',
  templateUrl: './ngstyle.component.html',
  styleUrls: ['./ngstyle.component.css']
})
export class NgstyleComponent implements OnInit {
  @Input() color = 'red';
  @Input() bgc = 'blue';
  font = 'verdana';
  size = '32px';
  constructor() { }

  ngOnInit() {
  }

}
