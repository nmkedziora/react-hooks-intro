import React from 'react';

const TodosContext = React.createContext({
  todos: [
    { id: 1, text: 'Todo 111', complete: false },
    { id: 2, text: 'Todo 222', complete: false },
    { id: 3, text: 'Todo 333', complete: false },
  ],
  current: {},
});

export default TodosContext;
