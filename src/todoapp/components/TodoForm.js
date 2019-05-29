import React, { useState, useContext, useEffect } from 'react';
import TodosContext from '../context';

export default function TodoForm() {
  const [todo, setTodo] = useState('');
  const { state: { current = {} }, dispatch } = useContext(TodosContext);

  useEffect(() => {
    if (current.text) {
      setTodo(current.text);
    } else {
      setTodo('');
    }
  }, [current.id, current.text]);

  const handleSubmit = event => {
    event.preventDefault();

    if (current.text) {
      dispatch({ type: 'UPDATE_TODO', payload: todo });
    } else {
      dispatch({ type: 'ADD_TODO', payload: todo });
    }
    setTodo('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={event => setTodo(event.target.value)}
        value={todo} />
    </form>
  );
}
