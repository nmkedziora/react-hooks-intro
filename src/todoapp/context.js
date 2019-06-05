import React from 'react';

const TodosContext = React.createContext({
  todos: [],
  current: {},
});

export default TodosContext;
