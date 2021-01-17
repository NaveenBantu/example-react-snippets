import React from 'react';
import TodoService from './services/TodoService';
import './App.css';

const todoService = new TodoService();

function App() {
  todoService.all();
  return (
    <div className="App">
      <h1>Todos</h1>
    </div>
  );
}

export default App;
