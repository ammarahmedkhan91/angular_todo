import { Component } from '@angular/core';
import { Todo } from './data-types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todos: Todo[];
  localTodos: string;
  constructor() {
    this.todos = [];
    this.localTodos = localStorage.getItem("todos");
    if (this.localTodos) {
      this.todos = JSON.parse(this.localTodos);
    }
  }

  deleteTodoItem(todo:Todo) {
    console.log(todo);
    let index = this.todos.indexOf(todo);
    this.todos.splice(index,1)
    localStorage.setItem("todos", JSON.stringify(this.todos))
  }

  addTodoItem(todo:Todo) {
    console.log(todo);
    this.todos.unshift(todo);
    localStorage.setItem("todos", JSON.stringify(this.todos))
  }

  

}
