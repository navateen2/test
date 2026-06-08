import { useNavigate } from "react-router"
import "./EmployeeList.css"
import Status from "./Status"
import {employees} from "./Page"
import DeleteConfirmation from "./DeleteConfirmation"
import { useState } from "react"


function EmployeeRow(props:{type:string,values:Array<string>,index:number}){
    const navigate=useNavigate()
    if(props.type==="heading"){
    return (<>
    <div className="employee-row  blue-row">
        <span className="row-item">Employee Name</span>
        <span className="row-item">Employee ID</span>
        <span className="row-item">Joining Date</span>
        <span className="row-item">Role</span>
        <span className="row-item">Status</span>
        <span className="row-item">Experience</span>
        <span className="row-item">Action</span>
    </div>
    
    
    </>)
    }
    else if(props.type==="record"){

        if(props.index % 2 ==0){
            return(
                <div className="employee-row grey-row" onClick={()=>{navigate("/employee/details/"+props.index)}}>
                
                    <div className="row-item">{props.values[0]}</div>
                    <div className="row-item">{props.values[1]}</div>
                    <div className="row-item">{props.values[2]}</div>
                    <div className="row-item">{props.values[3]}</div>
                    <div className="row-item"><Status type={props.values[4]} /></div>
                    <div className="row-item">{props.values[5]}</div>
                
                    <div className="icon-pair row-item">
                        <img src="/src/assets/trash.svg" alt="" />
                        <img src="/src/assets/pencil.svg" alt="" />
                    </div>
                </div>
            )

        }else{
            return(
            <div className="employee-row white-row" onClick={()=>{navigate("/employee/details/"+props.index)}}>
                    <div className="row-item">{props.values[0]}</div>
                    <div className="row-item">{props.values[1]}</div>
                    <div className="row-item">{props.values[2]}</div>
                    <div className="row-item">{props.values[3]}</div>
                    <div className="row-item"><Status type={props.values[4]} /></div>
                    <div className="row-item">{props.values[5]}</div>
                <div className="icon-pair row-item">
                    <img src="/src/assets/trash.svg" alt="" />
                    <img src="/src/assets/pencil.svg" alt="" />
                </div>
            </div>)}
    }
}




function EmployeeList(){
    const navigate = useNavigate();
    let [dialog,setDialog]= useState(false)


    return(<>
    <div className="top-label justify-space-between">
                <span>Employee List</span>
                <div className="header-items-right">
                        <div className="filter-options">
                            <span className="filter-text">Filter By</span>
                            <select>
                                <option selected><b>Status</b></option>    
                                
                            </select>
                        </div>  
                        <div>
                            <button className="create-button" onClick={()=>navigate("/employee/create")}>
                                <img src="/src/assets/plus.svg" alt="" />
                                <span>Create Employee</span>
                            </button>

                        </div>
                </div>
    </div>
    
    <div className="list">
    <EmployeeRow type="heading" values={[]} index={0}/>
    {employees.map((a,b)=>{return (<EmployeeRow type="record" index={b} values={a} />)})}
    </div>
    {dialog && <DeleteConfirmation index={0} />}
    </>
    )
        
}

export default EmployeeList;
