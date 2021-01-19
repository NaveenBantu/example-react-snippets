import React from 'react';

export default function TodoListItem(props) {
    return (
        <div>
            <input type="hidden" value={props.todo.id}/>
            <input type="text"   value={props.todo.caption}/>
        </div>
    );
}