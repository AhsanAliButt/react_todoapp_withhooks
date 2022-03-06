import Task from './task/Task.js';
import { todotyle } from './TodoStyle.js';

const TodoList = ({ task,setTask}) => {
    return (
        <>
        <ul className='text-start' style={todotyle.container}>
            {task.map(tasks=>(
                <Task text={tasks.text} id={tasks.key} task={task} setTask={setTask} tasks={tasks} />
            ))}
        

        </ul>
        </>

    )
}
export default TodoList;