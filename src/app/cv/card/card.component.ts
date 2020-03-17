import {Component, Input, OnInit} from '@angular/core';
import {Personne} from '../model/personne';
import {Router} from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() personne: Personne;
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  navigate() {
    this.router.navigate(['cv', this.personne.id]);
  }
}
