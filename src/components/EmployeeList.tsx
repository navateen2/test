import { useNavigate } from "react-router"
import "./EmployeeList.css"
import Status from "./Status"
import DeleteConfirmation from "@components/DeleteConfirmation"
import { useState } from "react"
import { useGetEmployeesQuery } from "../employee/api"

function EmployeeRow(props:{type:string,values:any,index:number,deleteDialog:any}){
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
                <div className="employee-row grey-row" onClick={()=>{navigate("/employee/details/"+props.values["id"])}}>
                
                    <div className="row-item">{props.values["name"]}</div>
                    <div className="row-item">{props.values["id"]}</div>
                    <div className="row-item">{props.values["name"]}</div>
                    <div className="row-item">{props.values["role"]}</div>
                    <div className="row-item"><Status type={props.values["status"]} /></div>
                    <div className="row-item">{props.values["name"]}</div>
                
                    <div className="icon-pair row-item">
                        <img src="/src/assets/trash.svg" alt="" onClick={(e)=>{e.stopPropagation();props.deleteDialog(props.values["id"])}}/>
                        <img src="/src/assets/pencil.svg" alt="" />
                    </div>
                </div>
            )

        }else{
            return(
            <div className="employee-row white-row" onClick={()=>{navigate("/employee/details/"+props.values["id"])}}>
                    <div className="row-item">{props.values["name"]}</div>
                    <div className="row-item">{props.values["id"]}</div>
                    <div className="row-item">{props.values["name"]}</div>
                    <div className="row-item">{props.values["role"]}</div>
                    <div className="row-item"><Status type={props.values["status"]} /></div>
                    <div className="row-item">{props.values["name"]}</div>
                <div className="icon-pair row-item">
                    <img src="/src/assets/trash.svg" alt="" onClick={(e)=>{e.stopPropagation();props.deleteDialog(props.values["id"])}}/>
                    <img src="/src/assets/pencil.svg" alt="" />
                </div>
            </div>)}
    }
}




function EmployeeList(){
    // const employees=useSelector((state:any)=>state.employee.employees)
    const {data,isLoading,error}=useGetEmployeesQuery()
    const employees=data
    console.log(data)
    const navigate = useNavigate();
    let [dialog,setDialog]= useState(-1)


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
    <EmployeeRow type="heading" values={[]} index={0} deleteDialog={""}/>
    {!isLoading && (employees.map((a:any,b:number)=>{return (<EmployeeRow type="record" index={b} key={b} values={a} deleteDialog={setDialog}/>)}))}
    </div>
    {(dialog>-1) && <DeleteConfirmation index={dialog} setDialog={setDialog}/>}
    </>
    )
        
}

export default EmployeeList;
