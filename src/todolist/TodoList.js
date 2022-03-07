import Task from './task/Task.js';
import { todotyle } from './TodoStyle.js';

const TodoList = ({ task,setTask,editTask,setEditTask,inputText,setInputText,updateTask,setUpdateTask}) => {
    return (
        <>
        <ul className='text-start' style={todotyle.container}>
            {task.map(tasks=>(
                <Task text={tasks.text} id={tasks.key} task={task} setTask={setTask} tasks={tasks} editTask={editTask} seteditTask={setEditTask} 
                inputText={inputText} setInputText={setInputText} setUpdateTask={setUpdateTask} />
            ))}
        

        </ul>
        </>

    )
}
export default TodoList;