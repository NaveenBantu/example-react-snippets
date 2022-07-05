import React from 'react';
import TodoListItem from './TodoListItem';

// TODO
//
//  o Create a function component 'TodoList', which gets passed in an array
//    of 'Todo's.
//
//  o Display each 'Todo' of the array in a 'TodoListItem'
//    component.
//

const TodoList = ({todos}) => {
    return (<ul> {todos.map(todo => <TodoListItem key={todo.id} todo={todo}/>)} </ul>)
}

export default TodoList;