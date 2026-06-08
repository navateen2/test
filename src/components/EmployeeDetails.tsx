import "./details.css"
import {employees} from "./Page"
import { useParams } from "react-router"

export default function EmployeeDetails(){

    const {id}=useParams()
    const ind=Number(id)
    return (<>
    <div className="top-label justify-space-between">
                <span>Employee Details</span>
                <div className="header-items-right">
                        <div>
                            <button className="create-button">
                                <img src="/src/assets/plus.svg" alt="" />
                                <span>Edit Details</span>
                            </button>

                        </div>
                </div>
    </div>
    <div className="details-area">
        <div className="detail-row">
            <div className="detail-cell"><span className="detail-heading">Employee Name</span>{employees[ind][0]}<span></span></div>
            <div className="detail-cell"><span className="detail-heading">Joining Date</span><span>{employees[ind][2]}</span></div>
            <div className="detail-cell"><span className="detail-heading">Experience</span><span>{employees[ind][5]}</span></div>
            <div className="detail-cell"><span className="detail-heading">Role</span><span>{employees[ind][3]}</span></div>
            <div className="detail-cell"><span className="detail-heading">Status</span><span>{employees[ind][4]}</span></div>
            <div className="detail-cell"><span className="detail-heading">Experience</span><span>{employees[ind][5]}</span></div>

        </div>
        
        <div className="line" />

        <div className="detail-row">
            
            <div className="address-cell"><span>Address</span></div>
            <div className="id-cell"><span>Employee ID</span></div>


        </div>
    </div>
    
    
    </>)
}