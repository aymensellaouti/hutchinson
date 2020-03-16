import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css']
})
export class FilsComponent implements OnInit {
  @Input() messageDeMonPere = 'Je n ai rien reçu';
  constructor() { }
  @Output() reponseFils = new EventEmitter();
  ngOnInit() {
  }

  repondre() {
    let maReponse = '';
    if (this.messageDeMonPere === 'Je n ai rien reçu') {
      maReponse = 'Tu me manques';
    } else {
      maReponse = 'Merci papa';
    }
    this.reponseFils.emit(
      maReponse
    );
  }
}
