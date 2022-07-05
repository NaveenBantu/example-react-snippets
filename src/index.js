import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const todoList = (<div>
<h1>Todos</h1>
<ul>
    <li>
        Prepare Dinner
    </li>
    <li>
        Learn React
    </li>
    <li>
        Buy socks
    </li>
</ul>
</div>); 

ReactDOM.render(todoList,document.getElementById('root'));
// TODO
//
//  o Create one or more JSX expressions for an HTML page containing a todo
//    list with the following items
//
//      o 'Prepare Dinner'
//      o 'Learn React'
//      o 'Buy socks'
//
//  o Render the page.
//
//    Hint: ReactDOM.render(...)
//
