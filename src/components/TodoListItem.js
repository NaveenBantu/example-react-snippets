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
        this.state = {toggle: false};
    }

    handleclick(e) {
        console.log("inside click event",e);
        this.setState({toggle:!this.state.toggle});
    }

    render() {

        // TODO
        //
        //  o If the item is selected, then append ' selected' to the CSS
        //    class.
        //
        let cssClass = 'todo-caption';
        let cssClassSelected = 'todo-caption selected';

        return (
            <li>
                <span className={this.state.toggle?cssClassSelected:cssClass} onClick={() => this.handleclick()}>
                    {this.props.todo.caption}
                </span>
                <button onClick={() => this.props.deleteTodo(this.props.todo.id)}>
                    <MdDelete/>
                </button>
            </li>
        );

    }

}