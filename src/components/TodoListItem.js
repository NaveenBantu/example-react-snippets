import React from 'react';

export default class TodoListItem extends React.Component {

    render() {

        return (
            <div>
                <input type="hidden" value={this.props.todo.id}/>
                <input type="text"   value={this.props.todo.caption}/>
            </div>
        );

    }

}