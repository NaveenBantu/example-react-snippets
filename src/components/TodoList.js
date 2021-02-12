import React from 'react';
import todoService from '../services/TodoService';
import TodoListItem from './TodoListItem';

export default class TodoList extends React.Component {

    constructor(props) {

        super(props);

        this.state = { todos: [] };

    }

    componentDidMount() {

        todoService.all().then(
            todos => { this.setState({ todos: todos }); }
        );
    
    }

    render() {

        const items =
            this.state.todos.map(
                item => <TodoListItem key={item.id.toString()} todo={item}/>
            );

        return <ul className={'todo-list'}>{items}</ul>;

    }

}