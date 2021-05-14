import React from 'react';
import { MdDelete } from 'react-icons/md';

// TODO
//
//  o A function, which selects the current 'Todo' is passed as a property
//    to this component. Where has it to be called?
//
//  o A function, which deletes the current 'Todo' is passed as a property
//    to this component. Where has it to be called?
//

export default class TodoListItem extends React.Component {

    // Events /////

    handleSelect = () => alert('Select Me');

    handleDelete = () => alert('Delete Me');


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