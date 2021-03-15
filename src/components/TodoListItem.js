import React from 'react';
import { MdDelete } from 'react-icons/md';

export default class TodoListItem extends React.Component {

    // Events /////

    handleSelect = () => this.props.onSelect(this.props.todo.id);

    handleDelete = () => this.props.onDelete(this.props.todo.id);


    // Rendering /////

    render() {

        const todo = this.props.todo;

        const style = 'pure-button simple' +
            (this.props.selected ? ' selected' : '') +
            (todo.done ? ' done' : '');

        return (
            <li className="pure-menu-item">
                <button
                    onClick   = {this.handleDelete}
                    className = "pure-button"
                >
                    <MdDelete/>
                </button>
                <div
                    onClick   = {this.handleSelect}
                    className = {style}
                >
                    {todo.caption}
                    &nbsp;
                    <span className="w3-badge">{todo.priority}</span>
                </div>
            </li>
        );

    }

}