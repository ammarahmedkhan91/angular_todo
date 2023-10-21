import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../data-types';

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.css']
})
export class TodoItemsComponent {

  check: boolean;

  @Input() todo:Todo | undefined;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter()

  constructor() { }

  onDelete(todo:Todo) {
    this.todoDelete.emit(todo);
  }

  onCheckClick(event: any) {
    this.check = event.target.checked;
  }

}
