import './Notes.css';

const Notes = () => {
    return ( 
        <div className="notes widgets">
            <div className='notes-container'>
                <h1>Notes</h1>
                <hr></hr>
                <input className='notes-input' type='text'></input>
            </div>
        </div>
    );
}

export default Notes;