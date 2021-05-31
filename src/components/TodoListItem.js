import React from 'react';
import PubSub from 'pubsub-js';
import { MdDelete } from 'react-icons/md';

export default class TodoListItem extends React.Component {

    // Events /////

    handleSelect = () => PubSub.publishSync('on-select', this.props.todo.id);

    handleDelete = () => PubSub.publishSync('on-delete', this.props.todo.id);


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