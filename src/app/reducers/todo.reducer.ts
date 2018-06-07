import { TodoAction } from '../actions/todo.action';
import { Todo } from '../models/todo';


export const todos = (state: Todo[]  = [], action) => {
  switch (action.type) {
    case TodoAction.ADD:
      return [...state, action.payload];
    case TodoAction.REMOVE:
      console.log('REMOVE todo reducer...', action);
      return state.filter(todo => {
        return todo.uid !== action.payload.uid;
      } );
    case TodoAction.TOGGLE:
      console.log('TOGGLE todo reducer...', action);
      return state.map(todo => {
        if (todo.uid === action.payload.uid) {
          return Object.assign({}, todo, {
            complete: !todo.complete
          });
        }
        return todo;
      });
    default:
      return state;
  }
};
