import { useState} from 'react';
import './Notes.css';

const Notes = () => {
    const savedNotes = localStorage.getItem('notes'); // get the notes item from localstorage

    const [note, setNote] = useState(''); // initialize state using the previously saved notes, if any
    const [changeNote, setChangeNote] = useState(savedNotes);

    const onChangeNote = (event) => {
        setChangeNote(event.target.value); // set the new note value to the current value
    }

    const saveNote = () => {
        setNote(changeNote)

        localStorage.setItem('notes', note); // set the notes localstorage value to the current value in textarea
        console.log(localStorage.getItem('notes'))
    }

    return ( 
        <div className="notes widgets">
            <div className='notes-container'>
                <h1>Notes</h1>
                <hr></hr>

                <textarea className='notes-input' placeholder='Type something...' name='notesinput' value={changeNote} rows={20} cols={10} onChange={onChangeNote}></textarea>
                <button onClick={saveNote}>Save</button>
            </div>
        </div>
    );
}

export default Notes;