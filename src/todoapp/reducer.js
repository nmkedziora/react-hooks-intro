import React from 'react';
import uuidv4 from 'uuid/v4';

function todosReducer(state, action) {
  let todo;
  let todos;
  switch (action.type) {
    case 'ADD_TODO':
      if(!action.payload) {
        return state;
      }
      if(state.todos.findIndex(todo => todo.text === action.payload) !== -1) {
        return state;
      }
      todo = {
        id: uuidv4(),
        text: action.payload,
        complete: false,
      };
      todos = [...state.todos, todo];

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
      todos = state.todos.map(todo => todo.id === action.payload.id ? {
        ...action.payload,
        complete: !action.payload.complete,
      } : todo);

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
        current: isDeletedTodo
      };
    case 'UPDATE_TODO':
       if(!action.payload) {
        return state;
      }
      if(state.todos.findIndex(todo => todo.text === action.payload) !== -1) {
        return state;
      }
      todo = {...state.current, text: action.payload};
      const index = state.todos.findIndex(todo => todo.id === state.current.id);
      todos = [
        ...state.todos.slice(0, index),
        todo,
        ...state.todos.slice(index + 1)
      ];

      return {
        ...state,
        todos,
        current: {}
      };
    default:
    return state;
  }
}

export default todosReducer;
