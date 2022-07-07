import React from 'react';

export default function TodoDetails(props) {

    return (
        <>
            <form>
                <label for='caption'>Caption</label>
                <input type='text' id='caption' value={props.todo.caption}/>
                <label for='desc'>Desc.</label>
                <input type='text' id='desc' value={props.todo.caption}/>
                <button type='submit' onClick={() => this.props.createToDo()}>Add</button>
            </form>
        </>
    );

}