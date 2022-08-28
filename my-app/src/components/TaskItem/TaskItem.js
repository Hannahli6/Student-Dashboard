import './TaskItem.css'

const TaskItem = ({task}) => {
    return ( 
        <div className={task.completed ? 'taskitem completed' : 'taskitem'}> {/** if task is checked, apply class 'taskitem completed'.  if not, class = 'taskitem' */}
            <h3>{task.name}</h3>
            <input className='taskitem-input' type='checkbox'></input>
        </div>
    );
}

export default TaskItem;