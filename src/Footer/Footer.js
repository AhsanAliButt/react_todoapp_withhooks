import { Fstyle } from "./FooterStyle";
const Footer=({task,setTask})=>{

    const deleteAll = () => {
        setTask([]);
    }

    return(
        <div className="row fw-bold" style={Fstyle.footerdiv}>
<h4 className="text-start text-success"> "You have {task.length} Tasks Remaining" <button style={Fstyle.button} className="m-0 mt-1 ms-1 fs-5" onClick={deleteAll}> Clear All</button></h4>
        </div>
    )
}
export default Footer;