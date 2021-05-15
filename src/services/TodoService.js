export class TodoService {

    // fields /////

    serviceUrl = 'http://localhost:3100/todos';


    // methods /////

    async create(todo) {

        // TODO
        //
        //  o Send a POST request, which stores a new 'Todo' in the repository.
        //
        //  o Return the ID of the created 'Todo'.
        //

        return -1;

    }

    async read(todoId) {

        // TODO
        //
        //  o Send a GET request, which returns the 'Todo' with
        //    the specified ID from the repository.
        //

        return undefined;

    }

    async update(todo) {

        // TODO
        //
        //  o Send a PUT request, which updates an existing 'Todo'
        //    in the repository.
        //

    }

    async delete(todoId) {

        // TODO
        //
        //  o Send a DELETE request, which removes an existing 'Todo'
        //    from the repository.
        //

    }

    async all() {

        // TODO
        //
        //  o Send a GET request, which returns all 'Todo's
        //    of the repository.
        //

        return [];

    }

}

const todoService = new TodoService();

export default todoService;
