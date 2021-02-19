import React from 'react';
import { MdDelete } from 'react-icons/md';

export default class TodoListItem extends React.Component {

    // Events /////

    handleSelect = () => this.props.onSelect(this.props.todo.id);

    handleDelete = () => this.props.onDelete(this.props.todo.id);


    // Rendering /////

    render() {

        let cssClass = 'todo-caption' +
            (this.props.selected ? ' selected' : '');

        return (
            <li>
                <span
                    className = {cssClass}
                    onClick   = {this.handleSelect}
                >
                    {this.props.todo.caption}
                </span>
                <button onClick={this.handleDelete}>
                    <MdDelete/>
                </button>
            </li>
        );

    }

}