import React from 'react';
import Clock from "./components/Clock";
import TodoList from './components/TodoList';
import { currentYear } from './utils/time-utils';
import './App.css';

function App() {

  return (
    <div className="App">
      <h1>Todos</h1>
      <hr/>
      <div>jukia.com - &copy; {currentYear()}</div>
      <TodoList/>
      <hr/>
      <Clock/>
    </div>
  );

}

export default App;
