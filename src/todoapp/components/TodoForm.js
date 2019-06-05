import React, { useState, useContext, useEffect } from 'react';
import TodosContext from '../context';
import axios from 'axios';
import uuidv4 from 'uuid/v4';

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

  const handleSubmit = async event => {
    event.preventDefault();

    if (current.text) {
        const response = await axios.patch(`https://hooks-api.nataliakedziora.now.sh/todos/${current.id}`, {
        text: todo
      });
      dispatch({ type: 'UPDATE_TODO', payload: response.data });
    } else {
      const response = await axios.post('https://hooks-api.nataliakedziora.now.sh/todos', {
        id: uuidv4(),
        text: todo,
        complete: false
      });
      dispatch({ type: 'ADD_TODO', payload: response.data });
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
