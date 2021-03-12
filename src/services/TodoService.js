import Todo from '../model/Todo';

export class TodoService {

    // methods /////

    async create(todo) {

        return 1;

    }

    async read(todoId) {

    }

    async update(todo) {

    }

    async delete(todoId) {

    }

    async all() {

        console.log('A');
        const response = await fetch('http://localhost:3100/todos');
        console.log('B');
        const todos    = await response.json();
        console.log('C');
        return todos;

    }

}

const todoService = new TodoService();

export default todoService;
