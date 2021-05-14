import React from 'react';
import TodoListItem from './TodoListItem';

// TODO
//
//  o A function, which selects the current 'Todo' is passed as a property
//    to this component. It has to be passed to the list items?
//
//  o A function, which deletes the current 'Todo' is passed as a property
//    to this component. It has to be passed to the list items?
//

export default class TodoList extends React.Component {

    // Events /////

    handleSelect = idTodo => alert('Pass me to items!');

    handleDelete = idTodo => alert('Pass me to items!');


    // Rendering /////

    render() {

        const items =
            this.props.todos.map(
                item => <TodoListItem
                    key      = {item.id.toString()}
                    todo     = {item}
                    selected = {this.props.todo && item.id === this.props.todo.id}
                />
            );

        return <ul className={'todo-list'}>{items}</ul>;

    }

}