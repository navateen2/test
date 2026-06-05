import { useNavigate } from "react-router"
import "./EmployeeList.css"

function EmployeeRow(props:{type:string,values:Array<string>,index:number}){

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
                <div className="employee-row grey-row">
                {
                    props.values.map((a:string)=>{return <div className="row-item">{a}</div>})
                }
                <div className="icon-pair row-item">
                    <img src="/src/assets/trash.svg" alt="" />
                    <img src="/src/assets/pencil.svg" alt="" />
                </div>
            </div>
            )

        }else{
            return(
            <div className="employee-row white-row">
                {
                    props.values.map((a:string)=>{return <div className="row-item">{a}</div>})
                }
                <div className="icon-pair row-item">
                    <img src="/src/assets/trash.svg" alt="" />
                    <img src="/src/assets/pencil.svg" alt="" />
                </div>
            </div>)}
    }
}

const employees = [
  ["Vishal M",      "Lazada", "12.04.2021", "Full Stack",  "Probation", "5 Years"],
  ["Susan Kurian",  "XYZ",    "12.04.2021", "UI Engineer", "Probation", "7 Years"],
  ["Yugesh",        "XYZ",    "12.04.2021", "Devops",      "Active",    "6 Years"],
  ["Midhun",        "Lazada", "12.04.2021", "Full Stack",  "Active",    "5 Years"],
  ["Abhijith",      "XYZ",    "12.04.2021", "UI Engineer", "Inactive",  "7 Years"],
  ["Aiswarya",      "XYZ",    "12.04.2021", "Devops",      "Active",    "6 Years"],
  ["Fayis",         "Lazada", "12.04.2021", "Full Stack",  "Active",    "5 Years"],
  ["Vennila",       "XYZ",    "12.04.2021", "UI Engineer", "Active",    "7 Years"],
  ["Stephen John",  "XYZ",    "12.04.2021", "Devops",      "Active",    "6 Years"],
  ["Monica",        "Lazada", "12.04.2021", "Full Stack",  "Active",    "5 Years"],
  ["Rachel",        "XYZ",    "12.04.2021", "UI Engineer", "Active",    "7 Years"],
];


function EmployeeList(){
    const navigate = useNavigate();

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
    </>
    )
        
}

export default EmployeeList