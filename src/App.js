import React from 'react';
import todoService from './services/TodoService';
import TodoList from './components/TodoList';
import { currentYear } from './utils/time-utils';
import './App.css';

class App extends React.Component {

  render() {

    const todos = todoService.all();

    return (
      <div className="App">
        <h1>Todos</h1>
        <hr/>
        <div>jukia.com - &copy; {currentYear()}</div>
        <TodoList todos={todos}/>
      </div>
    );
    
   }

}

export default App;
