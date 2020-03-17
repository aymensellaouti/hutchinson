import { Injectable } from '@angular/core';
import {Todo} from '../model/todo';
import {LoggerService} from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos: Todo[] = [
    new Todo('test', 'test')
  ];
  constructor(
    private loggerService: LoggerService
  ) { }
  getTodos(): Todo[] {
    return this.todos;
  }
  logTodos() {
    this.loggerService.logger(this.todos);
  }
  addTodo(todo: Todo) {
    this.todos.push(todo);
  }
  deleteTodo(todo: Todo) {
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
  }
}
