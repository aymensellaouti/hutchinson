import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Personne} from '../model/personne';
import {CvService} from '../services/cv.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  personnes: Personne[];
  @Output() forwardPerson = new EventEmitter();
  constructor(
    private cvService: CvService
  ) { }

  ngOnInit() {
    this.personnes = this.cvService.getPersonnes();
  }

  forwardPersonne(personne: Personne) {
    this.forwardPerson.emit(personne);
  }
}
