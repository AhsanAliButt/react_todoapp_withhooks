import { styles } from "./ButtonStyle";
const Sbutton=(props)=>{
    return(
        
        <button type="submit" className="btn btn-success mt-2" style={styles.buttonstyle} onClick={props.onClick}>{props.tagname}</button>
        
    )
}

export default Sbutton;