import React, { useContext, useReducer } from 'react';
import { UserContext } from './index';

const initialState = {
  count: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return initialState;
  }
}

export default function TodoApp() {
  const user = useContext(UserContext);
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <h1>Todos app</h1>
      <div>Hello {user}!</div>

      <div>
        Count: {state.count}
        <button onClick={() => dispatch({ type: 'increment' })}>+</button>
        <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
        <button onClick={() => dispatch({ type: 'reset' })}>reset</button>
      </div>
    </>
  );
}
