import React from 'react';
import Priority from '../model/Priority';

export default class TodoDetails extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            caption:     props.todo.caption,
            description: props.todo.description,
            priority:    props.todo.priority,
            done:        props.todo.done
        };

    }

    handleChange = event => {
        const target = event.target;
        const value  = target.type === 'checkbox' ? target.checked : target.value;
        const name   = target.name;

        this.setState({ [name]: value });
    }

    handleSubmit = event => {
        alert('A Todo was submitted!');
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Caption
                    <input
                        name     = "caption"
                        type     = "text"
                        value    = {this.state.caption}
                        onChange = {this.handleChange}
                    />
                </label>
                <label>
                    Description
                    <textarea
                        name     = "description"
                        value    = {this.state.description}
                        onChange = {this.handleChange}
                    />
                </label>
                <label>
                    Priority
                    <select
                        name     = "priority"
                        value    = {this.state.priority}
                        onChange = {this.handleChange}
                    >
                        <option value={Priority.high}>high</option>
                        <option value={Priority.medium}>medium</option>
                        <option value={Priority.low}>low</option>
                    </select>
                </label>
                <label>
                    done
                    <input
                        name     = "done"
                        type     = "checkbox"
                        value    = {this.state.done}
                        onChange = {this.handleChange}
                    />
                </label>
                <input type="submit" value="Submit"/>
            </form>
        );    
    }

}
