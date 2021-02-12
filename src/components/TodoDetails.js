import React from 'react';
import Priority from '../model/Priority';

export default class TodoDetails extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            caption:     props.todo.caption,
            description: props.todo.description,
            priority:    props.todo.priority
        };

    }

    handleChangeCaption = event => {
        this.setState({ caption: event.target.value });
    }

    handleChangeDescription = event => {
        this.setState({ description: event.target.value });
    }

    handleChangePriority = event => {
        this.setState({ priority: event.target.value });
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
                        onChange = {this.handleChangeCaption}
                    />
                </label>
                <label>
                    Description
                    <textarea
                        name     = "description"
                        value    = {this.state.description}
                        onChange = {this.handleChangeDescription}
                    />
                </label>
                <label>
                    Priority
                    <select
                        name     = "priority"
                        value    = {this.state.priority}
                        onChange = {this.handleChangePriority}
                    >
                        <option value={Priority.high}>high</option>
                        <option value={Priority.medium}>medium</option>
                        <option value={Priority.low}>low</option>
                    </select>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        );    
    }

}
