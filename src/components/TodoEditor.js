import React from 'react';
import TodoList from './TodoList';
import TodoDetails from './TodoDetails';
import Todo from '../model/Todo';
import todoService from '../services/TodoService';
import { MdAddCircle } from 'react-icons/md';

export default class TodoEditor extends React.Component {

    // Create the Todo editor. Set the current state, where the current Todo
    // is 'null' (i.e. not selected) and the Todo list is empty. The Todo list
    // will be filled with data from the 'server', when the Todo editor is
    // loaded.

    constructor(props) {

        super(props);

        this.state = {
            todo:  null,     // <- The current Todo, being edited.
            todos: []        // <- All available Todos.
        };

    }


    // Initialization /////

    // Initializes the Todo list with the available Todos.

    componentDidMount() {

        this.loadTodos();

    }


    // Events /////

    // Creates a new Todo and sets it as the current Todo on the state of
    // the Todo editor.

    handleNew = () => {
        const todo = new Todo();
        this.setState({ todo: todo });
    }

    // Stores the current Todo on the 'server'. If the ID of the Todo is 'null',
    // then it will be persisted as a new Todo. Otherwise the values of
    // the existing Todo with that ID will be updated.

    handleStore = () => {
        const todo = this.state.todo;
        if (todo.id) {
            todoService.update(todo)   // <- 1) Update an exiting Todo.
                .then(() => {          // then
                    this.clearTodo();  // <- 2) Clear the current Todo.
                    this.loadTodos();  // <- 3) Reload available Todos.
                });
        } // if
        else {
            todoService.create(todo)   // <- 1) Create a new Todo.
                .then(() => {          // then
                    this.clearTodo();  // <- 2) Clear the current Todo.
                    this.loadTodos();  // <- 3) Reload available Todos.
                });
        } // else
    }

    // Edits a value of the current Todo.

    handleEdit = change => {
        const todo = {
            ...this.state.todo,        // <- 1) Merge current Todo
            ...change                  // <-    with changes.
        }
        this.setState({ todo: todo }); // <- 2) Set merged Todo on current state.
    }

    // Displays the details of the selected Todo.

    handleSelect = idTodo => {
        todoService.read(idTodo)                 // <- 1) Read Todo from 'server'.
            .then(todo => {                      // then
                this.setState({ todo: todo });   // <- 2) Set it on the state.
            });
    }

    // Deletes an existing Todo, identified by its ID.

    handleDelete = idTodo => {
        todoService.delete(idTodo)     // <- 1) Delete an exiting Todo.
            .then(() => {              // then
                if (this.state.todo && idTodo === this.state.todo.id) {
                    this.clearTodo();  // <- 2) Clear current Todo, if it was
                                       //       the deleted one.
                } // if
                this.loadTodos();      // <- 3) Reload available Todos.
            });
    }


    // Helpers /////

    // Clears the current Todo from the current state.

    clearTodo() {

        this.setState({ todo: null });
    
    }

    // Loads all available Todos from the 'server' and set them
    // on the current state, so they can be displayed by the list.

    loadTodos() {

        todoService.all().then(
            todos => { alert("HALLO"); this.setState({ todos: todos }); }
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