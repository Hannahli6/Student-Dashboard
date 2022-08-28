import { useState} from 'react';
import './Notes.css';

const Notes = () => {
    const [changeNote, setChangeNote] = useState('');

    const onChangeNote = (event) => {
        setChangeNote(event.target.value); 
    }

    return ( 
        <div className="notes widgets">
            <div className='notes-container'>
                <h1>Notes</h1>
                <hr></hr>
                <textarea className='notes-input' placeholder='Type something...' name='notesinput' value={changeNote} rows={20} cols={10} onChange={onChangeNote}></textarea>
            </div>
        </div>
    );
}

export default Notes;