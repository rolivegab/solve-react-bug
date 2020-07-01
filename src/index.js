import React from 'react';
import ReactDOM from 'react-dom';
// import {QualquerCoisa1, QualquerCoisa2} from './QualquerCoisa'
import Contador from './Contador'
import TodoList from './TodoList/TodoList';
// import * as serviceWorker from './serviceWorker';


ReactDOM.render(
  <React.StrictMode>
    {/* <Contador /> */}
    <TodoList />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
