import './TaskItem.css'

const TaskItem = ({task_name}) => {
    return ( 
        <div className='taskitem'>
            <h3>{task_name}</h3>
            <input className='taskitem-input' type='checkbox'></input>
        </div>
    );
}

export default TaskItem;