import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Personne} from '../model/personne';
import {CvService} from '../services/cv.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  personne: Personne;
  constructor(
    private activatedRoute: ActivatedRoute,
    private cvService: CvService,
    private router: Router
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (parametres) => {
        const personne = this.cvService.getPersonneById(parametres.id);
        if (personne) {
          this.personne = personne;
        } else {
          this.router.navigate(['cv']);
        }
      }
    );
    this.activatedRoute.queryParams.subscribe(
      qp => console.log(qp)
    );
  }

}
