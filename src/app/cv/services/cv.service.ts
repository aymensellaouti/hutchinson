import { Injectable } from '@angular/core';
import {Personne} from '../model/personne';
import {Observable, Subject} from 'rxjs';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
const API_LINK = 'https://apilb.tridevs.net/explorer/api/personnes/';
@Injectable({
  providedIn: 'root'
})
export class CvService {
  personnes: Personne[] = [];
  selectItemSubject: Subject<Personne>;
  constructor(
    private http: HttpClient
  ) {
    this.personnes = [
      new Personne(1, 'sellaouti', 'aymen', 37, 'teacher', 'as.jpg', 123456),
      new Personne(2, 'as', 'aymen', 37, 'teacher', '     ', 123456),
      new Personne(3, 'as', 'aymen', 37, 'teacher', '', 123456)
    ];
    this.selectItemSubject = new Subject<Personne>();
  }
  getFakePersonnes(): Personne[] {
    return this.personnes;
  }
  getFakePersonneById(id): Personne {
    return this.personnes.find(
      (personne) => personne.id === +id
    );
  }
  getPersonnes(): Observable<Personne[]> {
    return this.http.get<Personne[]>(API_LINK);
  }
  getPersonneById(id): Observable<Personne> {
    return this.http.get<Personne>(API_LINK + id);
  }
  selectItem(personne) {
    console.log(personne);
    this.selectItemSubject.next(personne);
  }
  deletePersonneById(id): Observable<Personne> {
    // const token = localStorage.getItem('token');
    // // const params = new HttpParams().set('access_token', token);
    // const headers = new HttpHeaders().set('Authorization', token);
    return this.http.delete<Personne>(API_LINK + id);
  }

  addCv(personne: Personne) {
    return this.http.post(API_LINK, personne);
  }
}
