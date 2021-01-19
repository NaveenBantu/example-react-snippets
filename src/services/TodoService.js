import Todo from '../model/Todo';

export class TodoService {

    // constructor /////

    constructor() {

        this.todos = new Map();
        this.count = 0;

        this.create(
            new Todo(
                'Learn React',
                'Learn building modern Web UIs with React.'
            )
        );

        this.create(
            new Todo(
                'Organize my Emails',
                'Clean up and organize my email account.'
            )
        );

        this.create(
            new Todo(
                'Meet Duke',
                'Discuss differences between Java and JavaScript.'
            )
        );

    }

    // methods /////

    create(todo) {

        this.count++;
        todo.id = this.count;
        this.todos.set(todo.id, todo);
        return todo.id;

    }

    get(todoId) {

        const todo = this.todos.get(todoId);

        if (todo) {
            return this.todos.get(todoId);
        } // if
        else {
            throw new Error(`TODO ${todoId} not found!`);
        } // else

    }

    delete(todoId) {

        if (this.todos.delete(todoId)) {
            return 'Ok';
        } // if
        else {
            throw new Error(`Could not delete TODO ${todoId}!`);
        } // else

    }

    async all() {

        return Array.from(this.todos.values());

    }

}

const todoService = new TodoService();

export default todoService;
