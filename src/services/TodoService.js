import Todo from '../model/Todo';

export default class TodoService {

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

    }

    // methods /////

    create(todo) {

        this.count++;
        todo.id = this.count;
        this.todos.set(todo.id, todo);
        return Promise.resolve(todo.id);

    }

    get(todoId) {

        const todo = this.todos.get(todoId);

        if (todo) {
            return Promise.resolve(
                this.todos.get(todoId)
            );
        } // if
        else {
            return Promise.reject(
                new Error(`TODO ${todoId} not found!`)
            );
        } // else

    }

    delete(todoId) {

        if (this.todos.delete(todoId)) {
            return Promise.resolve('Ok');
        } // if
        else {
            return Promise.reject(
                new Error(`Could not delete TODO ${todoId}!`)
            );
        } // else

    }

    all() {

        return Promise.resolve(
            this.todos.values()
        );

    }

}
