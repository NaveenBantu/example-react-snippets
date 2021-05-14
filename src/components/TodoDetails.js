import React from 'react';
import Priority from '../model/Priority';

// TODO
//
//  o Publish the changed value.
//
//  o Publish that the form has been submitted.
//

export default class TodoDetails extends React.Component {

    handleChange = event => {
        const target = event.target;
        const value  = target.type === 'checkbox' ? target.checked : target.value;
        const name   = target.name;
    }

    handleSubmit = event => {
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
                        value    = {this.props.todo.caption}
                        onChange = {this.handleChange}
                    />
                </label>
                <label>
                    Description
                    <textarea
                        name     = "description"
                        value    = {this.props.todo.description}
                        onChange = {this.handleChange}
                    />
                </label>
                <label>
                    Priority
                    <select
                        name     = "priority"
                        value    = {this.props.todo.priority}
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
                        checked  = {this.props.todo.done}
                        onChange = {this.handleChange}
                    />
                </label>
                <input
                    type  = "submit"
                    value = {this.props.todo.id ? 'Update' : 'Create'}
                />
            </form>
        );    
    }

}
