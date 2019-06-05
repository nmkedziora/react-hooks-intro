import React, { useContext } from 'react';
import TodosContext from '../context';
import axios from 'axios';

function TodoList() {
  const { state, dispatch } = useContext(TodosContext);

  const toggleTodo = async todo => {
    const response = await axios.patch(`https://hooks-api.nataliakedziora.now.sh/todos/${todo.id}`, {
      complete: !todo.complete,
    });
    dispatch({ type: 'TOGGLE_TODO', payload: response.data });
  };

  const deleteTodo = async todo => {
    await axios.delete(`https://hooks-api.nataliakedziora.now.sh/todos/${todo.id}`);
    dispatch({ type: 'DELETE_TODO', payload: todo });
  };

  const setCurrentTodo = todo => {
    dispatch({ type: 'SET_CURRENT_TODO', payload: todo });
  };

  return (
    <div>
      <ul>
        {state.todos.map(todo => {
            const styles = { textDecoration: todo.complete ? 'line-through' : 'none' };

            return (
              <li key={todo.id}>
              <span onDoubleClick={() => toggleTodo(todo)}
                    style={styles}>
                {todo.text}
              </span>
                <button onClick={() => setCurrentTodo(todo)}>EDIT</button>
                <button onClick={() => deleteTodo(todo)}>DELETE</button>
              </li>

            );
          },
        )}
      </ul>
    </div>
  );
}

export default TodoList;
