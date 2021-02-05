import React from 'react';
import { MdDelete } from 'react-icons/md';

export default class TodoListItem extends React.Component {

    constructor(props) {

        super(props);

        this.state = { selected: false };

    }

    handleSelect = () => {
        this.setState(
            state => ({ selected: !state.selected })
        );
    }

    handleDelete = () => { alert('Todo deleted!'); }

    render() {

        let cssClass = 'todo-caption' +
            (this.state.selected ? ' selected' : '');

        return (
            <li>
                <button onClick={this.handleDelete}>
                    <MdDelete/>
                </button>
                <span
                    className = {cssClass}
                    onClick   = {this.handleSelect}
                >
                    {this.props.todo.caption}
                </span>
            </li>
        );

    }

}