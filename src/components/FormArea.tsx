import { useCreateEmployeeMutation} from "../employee/api";
import "./form.css"


function FormItem({name,tag}:{name:string,tag:string}){
    return (
        <>
        <div className="pair">
            <label>{name}</label>
            <input type="text" placeholder={name} name={tag}/>
        </div>
        </>
    )
}




function FormArea(){
    const [createEmployee,result] = useCreateEmployeeMutation()

    function handleSubmit(e: any) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const name = formData.get("name")?.toString() || '';
    const role = formData.get("role")?.toString() || '';
    const country=formData.get("country")?.toString() || ''
    const city=formData.get("city")?.toString() || ''
    const postal_code=formData.get("postal_code")?.toString() || ''
    const response:any={
            "name": name,
            "email": name.split(" ",1)+"@keyvalue.com",
            "age": 18,
            "address": {
                "country": country,
                "city": city,
                "postal_code": postal_code
            },
            "password": "string"
            }
    console.log(response)
    createEmployee(response)
    }
    return(<>
                <div className="top-label">
                <span>Create Employee</span>
                </div>
                <div className="form-area width-full">
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <FormItem name={"Employee Name"} tag="name" />
                        <FormItem name={"Employee ID"} tag= "id"/> 
                        <FormItem name={"Joining Date"} tag = "created_at"/>
                    </div>
                    <div className="row">
                        <FormItem name={"Role"} tag="role"/>
                        <FormItem name={"Status"} tag = "status"/>
                        <FormItem name={"Experience"} tag = "experience" />
                        
                    </div>

                    <div className="row">
                        <div>
                            <label>Address</label>
                            <div className="pair gap">
                                <input type="text" placeholder="Address" />
                                <input type="text" placeholder="City" name="city" />
                                <div className="country-postalcode" >
                                    <input type="text" placeholder="Country" name="country" className="width-half"/>
                                    <input type="text" placeholder="Postal Code" name="postal_code" className="width-half" />
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
                        <input type="submit" value="Create" className="create-button"  /> 
                        <input type="button" value="Cancel" className="cancel-button" />
                    </div>
                    
                </form>
            </div>
    
    </>)
}


export default FormArea;