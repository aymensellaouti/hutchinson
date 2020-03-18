import { Component, OnInit } from '@angular/core';
import {Personne} from '../model/personne';
import {LoggerService} from '../../services/logger.service';
import {TodoService} from '../../services/todo.service';
import {CvService} from '../services/cv.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  // selectedPersonne: Personne;
  nbSelected = 0;
  constructor(
    private loggerService: LoggerService,
    private todoService: TodoService,
    private cvService: CvService
  ) { }

  ngOnInit() {
    this.cvService.selectItemSubject.subscribe(
      (personne) => this.nbSelected++
    );
    // this.loggerService.logger('cc je suis le cv Component');
  }

  // getSelectedPersonne(personne: Personne) {
  //   this.selectedPersonne = personne;
  //   this.todoService.logTodos();
  // }
}
