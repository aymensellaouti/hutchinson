import {Component, Input, OnInit} from '@angular/core';
import {Personne} from '../model/personne';
import {Router} from '@angular/router';
import {CvService} from '../services/cv.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() personne: Personne;
  constructor(
    private router: Router,
    private cvService: CvService
  ) { }

  ngOnInit() {
    this.cvService.selectItemSubject.subscribe(
      (personne) => {
        console.log(personne);
        this.personne = personne;
      }
    );
  }

  navigate() {
    this.router.navigate(['cv', this.personne.id]);
  }
}
