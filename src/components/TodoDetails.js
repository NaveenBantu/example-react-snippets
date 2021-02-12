import React from 'react';

export default function TodoDetails(props) {

    return (
        <form>
            <label>
                Caption
                <input
                    name  = "caption"
                    type  = "text"
                    value = {props.todo.caption}
                />
            </label>
            <label>
                Description
                <input
                    name  = "description"
                    type  = "text"
                    value = {props.todo.description}
                />
            </label>
            <input type="submit" value="Submit"/>
        </form>
    );

}