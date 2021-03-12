import React from 'react';
import TodoList from './TodoList';
import TodoDetails from './TodoDetails';
import Todo from '../model/Todo';
import todoService from '../services/TodoService';
import { MdAddCircle } from 'react-icons/md';

export default class TodoEditor extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            todo:  null,
            todos: []
        };

    }


    // Initialization /////

    componentDidMount() {

        this.loadTodos();

    }


    // Events /////

    handleNew = () => {
        const todo = new Todo();
        this.setState({ todo: todo });
    }

    handleStore = async () => {
        const todo = this.state.todo;
        if (todo.id) {
            await todoService.update(todo);
        } // if
        else {
            await todoService.create(todo)
        } // else
        this.clearTodo();
        this.loadTodos();
    }

    handleEdit = change => {
        const todo = { ...this.state.todo, ...change };
        this.setState({ todo: todo });
    }

    handleSelect = async idTodo => {
        const todo = await todoService.read(idTodo);
        this.setState({ todo: todo });
    }

    handleDelete = async idTodo => {
        await todoService.delete(idTodo);
        if (this.state.todo && idTodo === this.state.todo.id) {
            this.clearTodo();
        } // if
        this.loadTodos();
    }


    // Helpers /////

    clearTodo = () => {

        this.setState({ todo: null });
    
    };

    loadTodos = async () => {

        const todos = await todoService.all();
        this.setState({ todos: todos });
    
    };


    // Rendering /////

    render() {

        return (
            <div className={'row'}>
                <div>
                    <button onClick={this.handleNew}><MdAddCircle/></button>
                    <hr/>
                    <TodoList
                        todo     = {this.state.todo}
                        todos    = {this.state.todos}
                        onSelect = {this.handleSelect}
                        onDelete = {this.handleDelete}
                    />
                </div>
                <div>
                    {
                        this.state.todo &&
                        <TodoDetails
                            todo    = {this.state.todo}
                            onEdit  = {this.handleEdit}
                            onStore = {this.handleStore}
                        />
                    }
                </div>
            </div>
        );
        
    }

}