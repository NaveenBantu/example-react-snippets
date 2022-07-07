import React, { useState } from 'react';

export default function TodoDetails(props) {

    const [caption, setCaption] = useState('');
    const [description, setDescription] = useState('');


    const handleChange = (e) =>{
        (e.target.id==='caption') ? setCaption(e.target.value) : setDescription(e.target.value);
        console.log("change ",e.target);
    }

    const handleSubmit = () => {
        console.log('created todo ',caption)
        alert('Created a new Todo: ' + caption + ' Desc: '+description);
    }

    return (
        <>
            <form onSubmit={() => handleSubmit()}>
                <label for='caption'>Caption</label>
                <input type='text' id='caption' value={props.todo.caption} onChange={e => handleChange(e)}/>
                <label for='desc'>Desc.</label>
                <input type='text' id='desc' value={props.todo.caption} onChange={event => handleChange(event)}/>
                <button type='submit'>Add</button>
            </form>
        </>
    );

}