import { useState } from "react";
import "./style.css";
const Todo=() => {
const [state,setState]=useState({
    task:"",desc:'',date:""})
const [list,setList]=useState([])
const [ifDate, setIfDate]= useState(true);
const [check, setCheck]= useState(false);

const chngehandle=(event)=>{
    setState({...state,[event.target.name]:event.target.value})
    console.log(state)
}
const clickhandle=(event)=>{
    setList([...list,state])
    setState({ task:"",desc:'',date:""})
}
const handleover=(event)=>{
    event.target.style.backgroundColor='blue'
}
const [style, setStyle] = useState("cont");
  
const changeStyle =()=>{
    if ( check=== false){
        setCheck(true);
    }
    else {setCheck(false)};
};


const dlthandler=(i)=>{
        list.splice(i,1)
        setList([...list])
}

const validateDate=(event)=> {
    const selDate= new Date(event.target.value) ;
    const curDate= new Date().getTime();
    console.log(selDate.getTime());
    console.log(curDate);

    if (curDate>selDate.getTime()){
        //alert('Due date is passed')
        setIfDate(!ifDate)
    }
 }

    return(
<div>
       <div  style={{marginLeft:'40%', display:'flex' ,flexDirection:'column',width:'30%'}}>
                <label>Enter task</label><input type="text" name="task" value={state.task} placeholder="Enter task"  onChange={chngehandle}/><br/>
                <label>Enter Description</label><input type="text" name="desc" value={state.desc} placeholder="Enter description" onChange={chngehandle}/><br/>
                <label>Enter date</label><input type="date" name="date" value={state.date} placeholder="enter date" onBlur={validateDate} onChange={chngehandle}/><br/>
               
                            <button className="btn-primary" onMouseOver={handleover} onClick={clickhandle}>Add</button>

     </div>
     <div style={{marginLeft:'40%'}} >

     
       <table className="table" style={{border:'1px solid black'}}>
           <thead  style={{border:'1px solid black'}}>
               <tr>
                   <th scope="col">srno</th>
                   <th scope="col">Task</th>
                   <th scope="col">description</th>
                   <th scope="col">Date</th>
                   <th scope="col">Button</th>
               </tr>
           </thead>
      
         <tbody style={{border:'1px solid black'}}>
            
             {
                list.map((val,index) => (
               
                        <tr>
                            <td>{index}</td>
                            <td>{val.task}</td>
                            <td>{val.desc}</td>
                            <td>{val.date}{ifDate?<p style={{ border:'yellow'}}>Your due date is passed</p>:<></>}</td>

                            <td><input type="checkbox" onClick={changeStyle}></input></td>
                            <td><button type="submit" onClick={()=>dlthandler(index)}>delete</button></td>
                        </tr>
                         
                           
                )
              



                )
            }      
              
                 
              </tbody>
             </table>         
      
           
       </div>
   </div> 
    )

}
export default Todo;