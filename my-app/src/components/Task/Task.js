import TaskItem from '../TaskItem/TaskItem';
import './Task.css';
import { BsArrowRight } from 'react-icons/bs';
import { IconContext } from 'react-icons/lib';

const Task = () => {
    const data = [
        {
            task: 'Study for English test',
            completed: true
        },
        {
            task: 'Migrate Canva account to new email',
            completed: false
        },
        {
            task: 'Eat lunch',
            completed: false
        }
    ]

    const magic = (event) => {
        event.preventDefault();
        console.log(event.target.todo.value);
    }   

    return ( 
        <div className="task widgets">
            <h1 className='task-title'>Assignments:</h1>

            <div className='task-container'>
                {
                    data.map(item => <TaskItem task_name={item.task} />)
                }
            </div>

            <form onSubmit={magic}>
                <input className='task-input' name='todo' type='text' placeholder='Add a Todo...' />
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