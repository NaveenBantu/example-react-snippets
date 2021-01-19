import React from 'react';
import TodoListItem from './TodoListItem';

export default class TodoList extends React.Component {

    render() {

        const items =
            this.props.todos.map(
                item => <li><TodoListItem todo={item}/></li>
            );

        return (
            <ul>
                {items}
            </ul>
        );

    }

}