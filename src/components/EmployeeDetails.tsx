import "./details.css"
// import {employees} from "./Page"
import { useParams } from "react-router"
import { useNavigate } from "react-router"
import store from "../store"
import { useSelector } from "react-redux"
import { useGetEmployeeByIdQuery } from "../employee/api"


export default function EmployeeDetails(){
    const navigate=useNavigate()
    // const details=store.s
    const {id}=useParams()
    const ind=Number(id)
    const {data,isLoading,error} = useGetEmployeeByIdQuery(ind)
    // const employees=useSelector((state:any)=>(state.employee.employees))
    return (<>
    <div className="top-label justify-space-between">
                <span>Employee Details</span>
                <div className="header-items-right">
                        <div>
                            <button className="create-button" onClick={()=>{navigate("/employee/edit/"+ind)}}>
                                <img src="/src/assets/plus.svg" alt="" />
                                <span>Edit Details</span>
                            </button>

                        </div>
                </div>
    </div>
    <div className="details-area">
        <div className="detail-row">
            <div className="detail-cell"><span className="detail-heading">Employee Name</span>{data?.["name"]}<span></span></div>
            <div className="detail-cell"><span className="detail-heading">Joining Date</span><span>{data?.["created_at"]}</span></div>
            <div className="detail-cell"><span className="detail-heading">Experience</span><span>{data?.["name"]}</span></div>
            <div className="detail-cell"><span className="detail-heading">Role</span><span>{data?.["role"]}</span></div>
            <div className="detail-cell"><span className="detail-heading">Status</span><span>{data?.["name"]}</span></div>


        </div>
        
        <div className="line" />

        <div className="detail-row">
            
            <div className="address-cell"><span>Address</span></div>
            <div className="id-cell"><span>Employee ID</span></div>


        </div>
    </div>
    
    
    </>)
}