import React from 'react';
import { MdDelete } from 'react-icons/md';

export default class TodoListItem extends React.Component {

    // Events /////

    handleSelect = () => alert('Publish ID of selected todo.');

    handleDelete = () => alert('Publish ID of todo, to be deleted.');


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