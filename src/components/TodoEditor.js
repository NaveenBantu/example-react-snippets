import React from 'react';
import TodoList from './TodoList';
import TodoDetails from './TodoDetails';
import Todo from '../model/Todo';
import { MdAddCircle } from 'react-icons/md';

export default class TodoEditor extends React.Component {

    constructor(props) {

        super(props);

        this.state = { todo: null };

    }

    handleNew = () => {
        const todo = new Todo();
        this.setState(
            state => ({ todo: todo })
        );
    }

    render() {

        return (
            <div className={'row'}>
                <div>
                    <button onClick={this.handleNew}><MdAddCircle/></button>
                    <hr/>
                    <TodoList/>
                </div>
                <div>
                    {
                        this.state.todo &&
                        <TodoDetails todo={this.state.todo}/>
                    }
                </div>
            </div>
        );
        
    }

}