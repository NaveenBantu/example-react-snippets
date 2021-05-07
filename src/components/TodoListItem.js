import React from 'react';
import { MdDelete } from 'react-icons/md';

export default class TodoListItem extends React.Component {

    // TODO
    //
    //  o Add a state 'selected' of type boolean.
    //
    //  o Toggle the value of 'selected', when the item is clicked.
    //
    //  o When the 'Delete' button was clicked, display an alert with
    //    a message that the item was deleted.
    //

    constructor(props) {

        super(props);

    }

    render() {

        // TODO
        //
        //  o If the item is selected, then append ' selected' to the CSS
        //    class.
        //
        let cssClass = 'todo-caption';

        return (
            <li>
                <span className={cssClass}>
                    {this.props.todo.caption}
                </span>
                <button>
                    <MdDelete/>
                </button>
            </li>
        );

    }

}