import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todos/todo.service';
import { Todo } from '../../models/todo';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  newTodo: Todo = new Todo();


  constructor(private _todoService: TodoService) { }

  ngOnInit() {
  }

  addTodo(): void {
    this._todoService.add(this.newTodo);
    // this.newTodo = new Todo();
    // Don't need ^^
  }

  toggleTodoComplete(todo): void {
    console.log('toggle todo component...');
    this._todoService.toggle(todo.uid);
  }

  removeTodo(todo): void {
    console.log('removing todo component...');
    this._todoService.deleteById(todo.uid);
  }

  public allTodos(): number {
    return this.incompleteTodos.length + this.completeTodos.length;
  }
  public get incompleteTodos(): Todo[] {
    return this._todoService.getIncompleteTodos();
  }

  public get completeTodos(): Todo[] {
    return this._todoService.getCompleteTodos();
  }

}
