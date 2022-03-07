import  Sbutton  from "../button/Button.js"

const InputArea = ({inputText,setInputText,task,setTask,editTask,setEditTask}) => {
    const InputTextHandler=(e)=>{
     setInputText(e.target.value);   
    }
    const addTask=(e)=>{
        e.preventDefault();
        console.log(inputText);
        if(!inputText){
            alert("plz write something");
        // }else if(inputText && !editTask){
        //     setTask(task.map((todo)=>{
        //         if(todo.key === editTask)
        //     })
        }else{
    setTask([...task,{completed:false,text:inputText,key:Math.random()*100}]);
    setInputText('')
     }
    }
    // const updatesTask=(e)=>{
    //     e.preventDefault();
    //     console.log("Updated Task")
    // }
        return (
            
                <form>
                    <div className="form-row">
                        <div className="col d-flex">
                            <input type="text" className="mt-2 bg-dark text-info fw-bold ms-2" maxLength="30" placeholder="Enter todo Task here" style={{width:'85%',margin:'5px'}} onChange={InputTextHandler} value={inputText} />
                            {editTask? <Sbutton tagname="Add" onClick={addTask} /> :  <Sbutton tagname="Update" onClick={addTask} /> }
                        </div>
                    </div>
                </form>
            
        )
    }
export default InputArea;