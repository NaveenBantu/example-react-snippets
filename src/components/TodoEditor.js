import React from 'react';
import TodoList from './TodoList';
import TodoDetails from './TodoDetails';
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

        // TODO
        //
        //  o Load the available 'Todo's.
        //
        this.loadTodos();

    }


    // Events /////

    // Creates a new Todo and sets it as the current Todo on the state of
    // the Todo editor.

    handleNew = () => {
            
        // TODO
        //
        //  o Create an handler, which creates a new 'Todo' object and assigns
        //    it to the field 'todo' of the component state.
        //
        //  o Call the handler 'handleNew'.
        //

    }

    // Stores the current Todo on the 'server'. If the ID of the Todo is 'null',
    // then it will be persisted as a new Todo. Otherwise the values of
    // the existing Todo with that ID will be updated.

    handleStore = () => {

        // TODO
        //
        //  o Get the current 'Todo' from the state.
        //
        //  o If the 'Todo' has a valid ID, then use 'todoService.update(...)'
        //    to update the values of the existing 'Todo'.
        //
        //  o If the 'Todo' is new, then use 'todoService.create(...)' to
        //    create a new 'Todo' in the repository.
        //
        //  o After both actions,
        //
        //      o clear the current 'Todo' ('clearTodo()') and
        //      o load the available 'Todo's ('loadTodos()').
        //
        //  Hint: Since all methods of the 'TodoService' are asynchronous,
        //        use a construction like
        //
        //          todoService.update(todo).then(() => ...);
        //
        //        In the 'then(...)' method put a function, which performs
        //        the actions that should happen, after the service function
        //        has completed.
        //

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

        // TODO
        //
        //  o When a list item gets selected, then retrieve that 'Todo' from
        //    the repository, using the 'todoService'.
        //

    }

    // Deletes an existing Todo, identified by its ID.

    handleDelete = idTodo => {

        // TODO
        //
        //  o Use the 'todoService' to delete the 'Todo' with the specified ID.
        //
        //  o After the 'Todo' has been deleted, clear the 'Todo' details,
        //    if the selected 'Todo' was the deleted 'Todo'.
        //
        //    Hint: 'clearTodo()'
        //
        //  o After the 'Todo' has been deleted, load the available 'Todo's.
        //
        //    Hint: 'loadTodos()'
        //

    }


    // Helpers /////

    // Clears the current Todo from the current state.

    clearTodo() {

        // TODO
        //
        //  o Set the state field 'todo' to 'null'.
        //

    }

    // Loads all available Todos from the 'server' and set them
    // on the current state, so they can be displayed by the list.

    loadTodos() {

        // TODO
        //
        //  o Load all avaialble 'Todo's from the 'todoService' and set
        //    the state field 'todos' to the loaded values.
        //

    }


    // Rendering /////

    // TODO
    //
    //  o Pass handler functions, where necessary.
    //

    render() {

        return (
            <div className={'row'}>
                <div>
                    <button><MdAddCircle/></button>
                    <hr/>
                    <TodoList
                        todo  = {this.state.todo}
                        todos = {this.state.todos}
                    />
                </div>
                <div>
                    {
                        this.state.todo &&
                        <TodoDetails
                            todo = {this.state.todo}
                        />
                    }
                </div>
            </div>
        );
        
    }

}