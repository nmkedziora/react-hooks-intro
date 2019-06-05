import React, { useContext, useEffect, useReducer, useState } from 'react';
import TodosContext from './context';
import todosReducer from './reducer';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import axios from 'axios';


const useAPI = url => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await axios.get(url);

    setData(response.data);
  };

  return data;
};

function TodoApp() {
  const initialState = useContext(TodosContext);
  const [state, dispatch] = useReducer(todosReducer, initialState);
  const todos = useAPI('https://hooks-api.nataliakedziora.now.sh/todos');
console.log(todos)

  useEffect(() => {
    dispatch({
      type: 'FETCH_TODOS',
      payload: todos
    })
  }, [todos]);

  return (
    <>
      <h1>Todo app</h1>
      <TodosContext.Provider value={{ state, dispatch }}>
        <TodoForm />
        <TodoList />
      </TodosContext.Provider>
    </>
  );
}

export default TodoApp;
