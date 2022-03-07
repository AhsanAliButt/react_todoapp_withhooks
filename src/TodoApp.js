import './TodoApp.css';
import Header from '../src/header/Header.js';
import  InputArea  from '../src/form/Forms.js';
import TodoList from './todolist/TodoList.js'
import Footer from './Footer/Footer.js'
import { useState } from 'react';

const TodoApp = () => {
    const [inputText,setInputText]=useState();
    const [task,setTask]=useState([]);
    const [editTask,setEditTask]=useState(true);
    const [updateTask,setUpdateTask]=useState(null);
    return (
        <>
            < div className=" container-fluid " >
                <div className="container ct1">

                    <Header />
                    <InputArea setInputText={setInputText} task={task} setTask={setTask} inputText={inputText} editTask={editTask} setEditTask={setEditTask} />
                    <TodoList task={task} setTask={setTask} editTask={editTask} setEditTask={setEditTask} inputText={inputText} setInputText={setInputText} updateTask={updateTask} setUpdateTask={setUpdateTask} />
                    <Footer task={task} setTask={setTask} />
                </div>

            </div>
        </>
    )
}

export default TodoApp;