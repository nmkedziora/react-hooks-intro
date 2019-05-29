import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './todoapp/TodoApp';
// import App from './App';
// import App from './AppClass';
// import App from './Login';
// import App from './Register';
// import App from './News';
// import App from './Counter';
import * as serviceWorker from './serviceWorker';
//
// export const UserContext = React.createContext();
// const username = 'Natalia';
//
// ReactDOM.render(
//   <UserContext.Provider value={username}>
//     <App />
//   </UserContext.Provider>,
//   document.getElementById('root'));


// TodoApp example
ReactDOM.render(
  <TodoApp />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
