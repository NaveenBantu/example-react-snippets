import React from 'react';

export default function TodoDetails(props) {

    // TODO
    //
    //  o A 'Todo' should be passed as an input property to the component.
    //
    //  o Return a form, which contains input fields for
    //
    //      o the caption of the 'Todo' and
    //      o the description.
    //
    //  o Let the form have a 'Submit' button.
    //
    //  Don't worry that the 'Submit' button is not working. We will do that
    //  in a later exercise!
    //

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