import { Injectable } from '@angular/core';
import {Personne} from '../model/personne';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CvService {
  personnes: Personne[] = [];
  selectItemSubject: Subject<Personne>;
  constructor() {
    this.personnes = [
      new Personne(1, 'sellaouti', 'aymen', 37, 'teacher', 'as.jpg', 123456),
      new Personne(2, 'as', 'aymen', 37, 'teacher', '     ', 123456),
      new Personne(3, 'as', 'aymen', 37, 'teacher', '', 123456)
    ];
    this.selectItemSubject = new Subject<Personne>();
  }
  getPersonnes(): Personne[] {
    return this.personnes;
  }
  getPersonneById(id): Personne {
    return this.personnes.find(
      (personne) => personne.id === +id
    );
  }
  selectItem(personne) {
    console.log(personne);
    this.selectItemSubject.next(personne);
  }
}
