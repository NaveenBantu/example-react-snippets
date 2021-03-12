export class TodoService {

    // fields /////

    serviceUrl = 'http://localhost:3100/todos';


    // methods /////

    async create(todo) {

        const config   = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(todo)
        };
        const response = await fetch(this.serviceUrl, config);
        const todoId   = await response.text();
        return parseInt(todoId);

    }

    async read(todoId) {

        const response = await fetch(`${this.serviceUrl}/${todoId}`);
        const todo     = await response.json();
        return todo;

    }

    async update(todo) {

        const config = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(todo)
        };
        await fetch(this.serviceUrl, config);

    }

    async delete(todoId) {

        const url    = `${this.serviceUrl}/${todoId}`;
        const config = { method: 'DELETE' };
        await fetch(url, config);

    }

    async all() {

        const response = await fetch(this.serviceUrl);
        const todos    = await response.json();
        return todos;

    }

}

const todoService = new TodoService();

export default todoService;
