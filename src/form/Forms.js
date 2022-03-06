import  Sbutton  from "../button/Button.js"

const InputArea = ({inputText,setInputText,task,setTask}) => {
    const InputTextHandler=(e)=>{
        console.log(e.target.value);
     setInputText(e.target.value);   
    }
    const addTask=(e)=>{
        e.preventDefault();
        if(!inputText){

        }else{
    setTask([...task,{completed:false,text:inputText,key:Math.random()*100}]);
    setInputText('')
     }
    }
        return (
            
                <form>
                    <div className="form-row">
                        <div className="col d-flex">
                            <input type="text" className="mt-2 bg-dark text-info fw-bold ms-2" maxLength="30" placeholder="Enter todo Task here" style={{width:'85%',margin:'5px'}} onChange={InputTextHandler} value={inputText} />
                            <Sbutton tagname="Add" onClick={addTask} />
                        </div>
                    </div>
                </form>
            
        )
    }
export default InputArea;