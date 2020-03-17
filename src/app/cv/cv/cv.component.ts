import { Component, OnInit } from '@angular/core';
import {Personne} from '../model/personne';
import {LoggerService} from '../../services/logger.service';
import {TodoService} from '../../services/todo.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  selectedPersonne: Personne;
  constructor(
    private loggerService: LoggerService,
    private todoService: TodoService
  ) { }

  ngOnInit() {
    this.loggerService.logger('cc je suis le cv Component');
  }

  getSelectedPersonne(personne: Personne) {
    this.selectedPersonne = personne;
    this.todoService.logTodos();
  }
}
