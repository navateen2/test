import { useParams } from "react-router"
import "./form.css"
import { employees } from "./Page"

function FormRow({name1,name2,name3,value1,value2,value3}:{name1:string,name2:string,name3:string,value1:string,value2:string,value3:string}){
    return( <>
        <div className="row">
            <FormItem name={name1} value={value1} />
            <FormItem name={name2} value={value2}/>
            <FormItem name={name3} value={value3}/>
        
         </div>
        </>
    )
}

function FormItem({name,value}:{name:string,value:string}){
    return (
        <>
        <div className="pair">
            <label>{name}</label>
            <input type="text" placeholder={name} value={value}/>
        </div>
        </>
    )
}




function EditEmployeeArea(){
    const {id}=useParams()
    const ind=Number(id)
    return(<>
                <div className="top-label">
                <span>Edit Employee</span>
                </div>
                <div className="form-area width-full">
                <form action="">
                    <FormRow name1="Employee Name" name2="Employee ID" name3="Joining Date" value1={employees[ind][0]} value2={employees[ind][1]} value3={employees[ind][2]} />
                    <FormRow name1="Role" name2="Status" name3="Experience" value1={employees[ind][3]} value2={employees[ind][4]} value3={employees[ind][5]}   />
                    
                    <div className="row">
                        <div>
                            <label>Address</label>
                            <div className="pair gap">
                                <input type="text" placeholder="Address" />
                                <input type="text" placeholder="City" />
                                <div className="country-postalcode" >
                                    <input type="text" placeholder="Country" className="width-half"/>
                                    <input type="text" placeholder="Postal Code" className="width-half" />
                                </div>
                            </div>
                        </div>
                        <div className = "pair">
                            <label >Upload Id Proof</label>
                            <input type="file" placeholder="Employee ID" id="file-upload" className="def-button" />
                            <label className="custom-file-input" htmlFor="file-upload">
                                <img src="/src/assets/Frame.png" alt="" />
                                <span className="center">Attach Files</span>
                            </label>
                        </div>
                    </div>
                    <div className="button-row">
                        <input type="button" value="Create" className="create-button" /> 
                        <input type="button" value="Cancel" className="cancel-button" />
                    </div>
                    
                </form>
            </div>
    
    </>)
}


export default EditEmployeeArea;

