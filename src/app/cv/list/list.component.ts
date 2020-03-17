import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Personne} from '../model/personne';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  personnes: Personne[];
  @Output() forwardPerson = new EventEmitter();
  constructor() { }

  ngOnInit() {
    this.personnes = [
      new Personne(1, 'sellaouti', 'aymen', 37, 'teacher', 'as.jpg', 123456),
      new Personne(2, 'as', 'aymen', 37, 'teacher', 'as.jpg', 123456),
    ];
  }

  forwardPersonne(personne: Personne) {
    this.forwardPerson.emit(personne);
  }
}
