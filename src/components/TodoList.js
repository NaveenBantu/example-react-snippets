import React from 'react';
import TodoListItem from './TodoListItem';

export default class TodoList extends React.Component {

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