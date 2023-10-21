import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from '../data-types';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {

  title: string;
  description: string;
  active: boolean;

  @Output() addTodo: EventEmitter<Todo> = new EventEmitter();

  onSubmit() {
    const todo: Todo = {
      title: this.title,
      description: this.description
    }
    this.addTodo.emit(todo);
  }

}
