import React from 'react';
import PubSub from 'pubsub-js';
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

        PubSub.subscribe('on-select', (msg, id)     => this.handleSelect(id));
        PubSub.subscribe('on-edit',   (msg, change) => this.handleEdit(change));
        PubSub.subscribe('on-store',  (msg, data)   => this.handleStore());
        PubSub.subscribe('on-delete', (msg, id)     => this.handleDelete(id));

    }


    // Events /////

    handleNew = () => {
        const todo = new Todo();
        this.setState({ todo: todo });
    }

    handleStore = () => {
        const todo = this.state.todo;
        if (todo.id) {
            todoService.update(todo)
                .then(() => {
                    this.clearTodo();
                    this.loadTodos();
                });
        } // if
        else {
            todoService.create(todo)
                .then(() => {
                    this.clearTodo();
                    this.loadTodos();
                });
        } // else
    }

    handleEdit = change => {
        const todo = {...this.state.todo, ...change};
        this.setState({ todo: todo });
    }

    handleSelect = idTodo => {
        todoService.get(idTodo)
            .then(todo => {
                this.setState({ todo: todo });
            });
    }

    handleDelete = idTodo => {
        todoService.delete(idTodo)
            .then(() => {
                if (this.state.todo && idTodo === this.state.todo.id) {
                    this.clearTodo();
                } // if
                this.loadTodos();
            });
    }


    // Helpers /////

    clearTodo() {

        this.setState({ todo: null });
    
    }

    loadTodos() {

        todoService.all().then(
            todos => { this.setState({ todos: todos }); }
        );
    
    }


    // Rendering /////

    render() {

        return (
            <div className={'row'}>
                <div>
                    <button onClick={this.handleNew}><MdAddCircle/></button>
                    <hr/>
                    <TodoList
                        todo  = {this.state.todo}
                        todos = {this.state.todos}
                    />
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