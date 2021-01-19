import React from 'react';
import TodoListItem from './TodoListItem';

export default function TodoList(props) {
    const items = props.todos.map(item => <li><TodoListItem todo={item}/></li>);
    return (
        <ul>
            {items}
        </ul>
    );
}