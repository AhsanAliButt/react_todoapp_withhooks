import { Tstyle } from "./TaskStyle";
import './TaskCSS.css';
import { AiFillDelete, AiFillEdit } from '../../../node_modules/react-icons/ai';
import { BsFillCheckCircleFill } from '../../../node_modules/react-icons/bs';
// const showIcons=()=>{

// }
// const hideIcons=()=>{
//     right: '0px',
//     transition: '0.5s'
// // }
// onMouseEnter={showIcons} onMouseLeave={hideIcons}

const Task = ({id, text, task, setTask, tasks , editTask, seteditTask ,inputText,setInputText,setUpdateTask }) => {
    const completeTask = () => {
        setTask(task.map((item) => {
            if (item.key === tasks.key) {
                return {
                    ...item, completed: !item.completed,
                };
            }
            return item;
        })
        );
    };
    const editTaskHandler = () => {
        const findTask= task.find((item)=>{
            return item.key === tasks.key
        });
        console.log(findTask)
        seteditTask(false)
        setInputText(findTask.text)
        setUpdateTask(tasks.key)
    }
    const deleteTask = () => {
        setTask(task.filter((el) => el.key !== tasks.key));
    }
    return (
        <li style={Tstyle.container} className={`${tasks.completed ? "completed" : ""}`}>
            {text}<span><BsFillCheckCircleFill color="green" size={25} onClick={completeTask} /> <AiFillEdit color="white" size={25} onClick={editTaskHandler} /> <AiFillDelete color="red" size={25} onClick={deleteTask} /></span>
        </li>
    )
}
export default Task; 
