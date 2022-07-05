import React from 'react';

// TODO
//
//  o Create a function component 'TodoListItem', which displays
//    the caption of a todo.
//
//  o Add a hidden field, which contains the ID of the todo.
//

const TodoListItem = ({todo}) => {
    console.log('todo ',todo);
    return <li>{todo.caption}</li>
}

export default TodoListItem;