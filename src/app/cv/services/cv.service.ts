import { Injectable } from '@angular/core';
import {Personne} from '../model/personne';

@Injectable({
  providedIn: 'root'
})
export class CvService {
  personnes: Personne[] = [];
  constructor() {
    this.personnes = [
      new Personne(1, 'sellaouti', 'aymen', 37, 'teacher', 'as.jpg', 123456),
      new Personne(2, 'as', 'aymen', 37, 'teacher', '     ', 123456),
      new Personne(2, 'as', 'aymen', 37, 'teacher', '', 123456)
    ];
  }
  getPersonnes(): Personne[] {
    return this.personnes;
  }
}
