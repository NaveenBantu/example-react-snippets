import React from 'react';
import Clock from './components/Clock';
import TodoList from './components/TodoList';
import { currentYear } from './utils/time-utils';
import './App.css';

function App() {

  return (
    <div className="App">
      <div>
        <h1>Todos</h1>
        <div>jukia.com - &copy; {currentYear()}</div>
      </div>
      <hr/>
      <div style={{display: "flex", flexDirection: "row"}}>
        <span>
          <nav>
            <h2 id="app-menu-caption">My Todos</h2>
            <div id="app-menu">
              <TodoList/>
            </div>
          </nav>
        </span>
        <span id="app-content"><div>One Todo</div></span>
      </div>
      <hr/>
      <div>
        <Clock/>
      </div>
    </div>
  );

}

export default App;
