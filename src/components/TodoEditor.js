import React from 'react';
import TodoList from './TodoList';
import { MdAddCircle } from 'react-icons/md';

export default class TodoEditor extends React.Component {

    // TODO
    //
    //  o Create a state, which can contain a 'Todo'.
    //
    //  o Initialize it with 'null'.
    //
    //  o When the 'Add' button was clicked, create a new 'Todo' and assign it
    //    to the state variable.
    //
    //    Hint: Remember to use 'this.setState(...)', when you want to modify
    //          the state.
    //
    //  o Render the 'TodoDetails' only if the state variable contains
    //    a 'Todo'.
    //

    render() {

        return (
            <div className={'row'}>
                <div>
                    <button><MdAddCircle/></button>
                    <hr/>
                    <TodoList/>
                </div>
                <div>
                    Render todo form here!
                </div>
            </div>
        );
        
    }

}