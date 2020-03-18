import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Personne} from '../model/personne';
import {CvService} from '../services/cv.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() personne: Personne;
  // @Output() selectItem = new EventEmitter();
  constructor(
    private cvService: CvService
  ) { }

  ngOnInit() {
  }
  selectPersonne() {
    // this.selectItem.emit(this.personne);
    this.cvService.selectItem(this.personne);
  }
}
