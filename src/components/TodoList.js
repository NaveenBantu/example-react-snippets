import React from 'react';
import TodoListItem from './TodoListItem';

export default class TodoList extends React.Component {

    // Events /////

    handleSelect = idTodo => this.props.onSelect(idTodo);

    handleDelete = idTodo => this.props.onDelete(idTodo);


    // Rendering /////

    render() {

        const items =
            this.props.todos.map(
                item => <TodoListItem
                    key      = {item.id.toString()}
                    todo     = {item}
                    selected = {this.props.todo && item.id === this.props.todo.id}
                    onSelect = {this.handleSelect}
                    onDelete = {this.handleDelete}
                />
            );

        return (
            <div class="pure-menu">
                <span class="pure-menu-heading">Your Todos</span>
                <ul className="pure-menu-list">{items}</ul>
            </div>
        );

    }

}