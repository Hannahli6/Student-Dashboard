import { useState } from 'react';
import TaskItem from '../TaskItem/TaskItem';
import './Task.css';
import { BsArrowRight } from 'react-icons/bs';
import { IconContext } from 'react-icons/lib';

const Task = () => {
    const data = [
        {
            name: 'Study for English test',
            completed: true
        },
        {
            name: 'Migrate Canva account to new email',
            completed: false
        },
        {
            name: 'Eat lunch',
            completed: false
        }
    ]

    const checkboxes = document.querySelectorAll('.taskitem-input')

    const [tasks, setTasks] = useState(data) // initialize state for task list

    // on form submit... run addItem
    const addItem = (event) => {
        event.preventDefault(); // prevent from reloading page

        const inputAsObject = { // create a new task object based on user input
            name: event.target.todo.value,
            completed: false
        }

        setTasks(previousTask => [...previousTask, inputAsObject]) // setTasks = an array of the previous value (data) plus the new todo object

        document.querySelector('.task-input').value = ''; //reset input value to the placeholder
    }   

    return ( 
        <div className="task widgets">
            <h1 className='task-title'>Assignments:</h1>

            <div className='task-container'>
                {
                    tasks.map((item, index) => <TaskItem task={item} key={index} />) // update task list using state, renders taskitem component
                }
            </div>

            <form onSubmit={addItem}>
                <input className='task-input' name='todo' type='text' placeholder='Add an assignment...' />
                <button className='task-button' type='submit'>
                    <IconContext.Provider value={{size: '1.5em'}}>
                        <BsArrowRight />
                    </IconContext.Provider>
                </button>
            </form>
        </div>
    );
}

export default Task;