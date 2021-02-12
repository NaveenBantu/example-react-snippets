import React from 'react';

export default class TodoDetails extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            caption:     props.todo.caption,
            description: props.todo.description
        };

    }

    handleChangeCaption = event => {
        this.setState({ caption: event.target.value });
    }

    handleChangeDescription = event => {
        this.setState({ description: event.target.value });
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
                    <input
                        name     = "description"
                        type     = "text"
                        value    = {this.state.description}
                        onChange = {this.handleChangeDescription}
                    />
                </label>
                <input type="submit" value="Submit"/>
            </form>
        );    
    }

}