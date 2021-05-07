import React from 'react';
import todoService from './services/TodoService';
import TodoList from './components/TodoList';
import { currentYear } from './utils/time-utils';
import './App.css';

function App() {

  const todos = todoService.all();

  // TODO
  // 
  //  o Display the 'TodoList' with the todos loaded by the 'TodoService'.
  //

  return (
    <div className="App">
      <h1>Todos</h1>
      <hr/>
      <div>jukia.com - &copy; {currentYear()}</div>
    </div>
  );
}

export default App;
