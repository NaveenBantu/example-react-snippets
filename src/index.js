import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const caption = <h1>Todos</h1>;
const item1 = <li>Prepare dinner</li>;
const item2 = <li>Learn React</li>;
const item3 = <li>Buy socks</li>;
const list = <ul>{item1}{item2}{item3}</ul>;
const page = <div>{caption}<hr/>{list}</div>

ReactDOM.render(page, document.getElementById('root'));
