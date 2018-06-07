import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Todo } from '../../models/todo';
import { TodoAction } from '../../actions/todo.action';
import * as uuid from 'uuid/v4';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private todos: Todo[];

  constructor(private _store: Store<Todo[]>) {
    _store.select('todos').subscribe((todos: Todo[]) => {
      this.todos = todos;
    });
  }

  add(todo: Todo): void {
    this._store.dispatch({
      type: TodoAction.ADD,
      payload: {
        uid: uuid(),
        title: todo.title,
        complete: todo.complete
      }
    });
  }

  deleteById(id: string): void {
    this._store.dispatch({
      type: TodoAction.REMOVE,
      payload: { uid: id }
    });
  }

  toggle(id: string): void {
    console.log('toggle todo service...');
    this._store.dispatch({
      type: TodoAction.TOGGLE,
      payload: { uid: id }
    });
  }

  getIncompleteTodos(): Todo[] {
    return this.todos.filter(todo => todo.complete === false);
  }

  getCompleteTodos(): Todo[] {
    return this.todos.filter(todo => todo.complete === true);
  }

  getTodoById(id: string): Todo {
    return this.todos.filter(todo => todo.uid === id).pop();
  }
}
