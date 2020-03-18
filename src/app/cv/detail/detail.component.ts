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
        this.cvService.getPersonneById(parametres.id).subscribe(
           (personne) => this.personne = personne,
          (erreur) => this.router.navigate(['cv'])
        );
      }
    );
    this.activatedRoute.queryParams.subscribe(
      qp => console.log(qp)
    );
  }

  deletePersonne(id: number) {
    this.cvService.deletePersonneById(id).subscribe(
      (data) => this.router.navigate(['cv']),
      (erreur) => console.log(erreur)
    );
  }
}
