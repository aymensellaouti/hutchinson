import { Component, OnInit } from '@angular/core';
import {Todo} from '../model/todo';
import {TodoService} from '../services/todo.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers: [TodoService]
})
export class TodoComponent implements OnInit {
  todos: Todo[];
  todo = new Todo();
  constructor(
    private todoService: TodoService,
    private router: Router
  ) {
  }
  ngOnInit() {
    this.todos = this.todoService.getTodos();
  }
  deleteTodo(todo: Todo) {
    this.todoService.deleteTodo(todo);
  }
  addTodo() {
    this.todoService.addTodo(this.todo);
    this.todo = new Todo();
  }

  goToCv() {
    this.router.navigate(['cv']);
  }
}
