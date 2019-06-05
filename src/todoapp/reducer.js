import React from 'react';
import uuidv4 from 'uuid/v4';

function todosReducer(state, action) {
  let todo;
  let todos;
  switch (action.type) {
    case 'FETCH_TODOS':
      return {
        ...state,
        todos: action.payload,
      };
    case 'ADD_TODO':
      // if(!action.payload) {
      //   return state;
      // }
      // if(state.todos.findIndex(todo => todo.text === action.payload) !== -1) {
      //   return state;
      // }
      todos = [...state.todos, action.payload];

      return {
        ...state,
        todos,
      };
    case 'SET_CURRENT_TODO':
      return {
        ...state,
        current: action.payload,
      };
    case 'TOGGLE_TODO':
      todos = state.todos.map(todo => todo.id === action.payload.id ? action.payload : todo);

      return {
        ...state,
        todos,
      };
    case 'DELETE_TODO':
      const isDeletedTodo = state.current.id === action.payload.id ? {} : state.current;
      todos = state.todos.filter(todo => todo.id !== action.payload.id);
      return {
        ...state,
        todos,
        current: isDeletedTodo,
      };
    case 'UPDATE_TODO':
      // if (!action.payload) {
      //   return state;
      // }
      // if (state.todos.findIndex(todo => todo.text === action.payload) !== -1) {
      //   return state;
      // }
      todo = { ...action.payload };
      const index = state.todos.findIndex(todo => todo.id === state.current.id);
      todos = [
        ...state.todos.slice(0, index),
        todo,
        ...state.todos.slice(index + 1),
      ];

      return {
        ...state,
        todos,
        current: {},
      };
    default:
      return state;
  }
}

export default todosReducer;
