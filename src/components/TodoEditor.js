import React from 'react';
import TodoList from './TodoList';
import { MdAddCircle } from 'react-icons/md';
import TodoDetails from './TodoDetails';
import todoService from '../services/TodoService';
import Todo from '../model/Todo';

export default class TodoEditor extends React.Component {

    constructor(props) {
        super(props);
        this.state = { todo: null };
    }

    addTodo = () => {
        this.setState({todo: new Todo()})
    }
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
                    <button onClick={this.addTodo}><MdAddCircle /></button>
                    <hr />
                    <TodoList />
                </div>
                <div>
                    {this.state.todo && <TodoDetails todo={this.state.todo} createtodo={this.createToDo}/>}
                    {/* Render todo form here! */}
                </div>
            </div>
        );

    }

}