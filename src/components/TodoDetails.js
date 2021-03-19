import React from 'react';
import Priority from '../model/Priority';

export default class TodoDetails extends React.Component {

    handleChange = event => {
        const target = event.target;
        const value  = target.type === 'checkbox' ? target.checked : target.value;
        const name   = target.name;
        this.props.onEdit({ [name]: value });
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.onStore();
    }

    render() {
        return (
            <form
                onSubmit  = {this.handleSubmit}
                className = "pure-form pure-form-aligned"
            >
                <fieldset>
                    <div className="pure-control-group">
                        <label htmlFor="caption">Caption</label>
                        <input
                            id       = "caption"
                            name     = "caption"
                            type     = "text"
                            value    = {this.props.todo.caption}
                            onChange = {this.handleChange}
                        />
                    </div>
                    <div className="pure-control-group">
                        <label htmlFor="description">Description</label>
                        <textarea
                            id       = "description"
                            name     = "description"
                            value    = {this.props.todo.description}
                            onChange = {this.handleChange}
                        />
                    </div>
                    <div className="pure-control-group">
                        <label htmlFor="priority">Priority</label>
                        <select
                            name     = "priority"
                            value    = {this.props.todo.priority}
                            onChange = {this.handleChange}
                        >
                            <option value={Priority.high}>high</option>
                            <option value={Priority.medium}>medium</option>
                            <option value={Priority.low}>low</option>
                        </select>
                    </div>
                    <div className="pure-controls">
                        <label
                            htmlFor   = "done"
                            className = "pure-checkbox"
                        >
                            <input
                                id        = "done"
                                name      = "done"
                                type      = "checkbox"
                                checked   = {this.props.todo.done}
                                onChange  = {this.handleChange}
                            /> done
                        </label>
                        <button
                            type      = "submit"
                            className = "pure-button pure-button-primary"
                        >
                            {this.props.todo.id ? 'Update' : 'Create'}
                        </button>
                    </div>
                </fieldset>
            </form>
        );    
    }

}
