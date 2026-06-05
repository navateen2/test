import "./form.css"
import FormRow from "./FormRow";
function FormArea(){
    return(<>
                <div className="top-label">
                <span>Create Employee</span>
                </div>
                <div className="form-area width-full">
                <form action="">
                    <FormRow name1="Employee Name" name2="Employee ID" name3="Joining Date"/>
                    <FormRow name1="Role" name2="Status" name3="Experience"/>
                    
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


export default FormArea;