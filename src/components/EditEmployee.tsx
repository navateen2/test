import { useParams } from "react-router"
import "./form.css"
import { useGetEmployeeByIdQuery,useUpdateEmployeeMutation } from "../employee/api"
// import { employee } from "./Page"

function FormRow(props:{name1:string,name2:string,name3:string,value1:string,value2:string,value3:string,tag1:string,tag2:string,tag3:string}){
    return( <>
        <div className="row">
            <FormItem name={props.name1} value={props.value1} tag={props.tag1} />
            <FormItem name={props.name2} value={props.value2} tag={props.tag2}/>
            <FormItem name={props.name3} value={props.value3} tag={props.tag3}/>
        
         </div>
        </>
    )
}

function FormItem({name,value,tag}:{name:string,value:string,tag:string}){
    return (
        <>
        <div className="pair">
            <label>{name}</label>
            <input type="text" placeholder={name} defaultValue={value} name={tag}/>
        </div>
        </>
    )
}




function EditEmployeeArea(){
    const {id}=useParams()
    const ind=Number(id)
    const {data,isLoading,error} = useGetEmployeeByIdQuery(ind)
    const [updateEmployee, { data:udata, isLoading:uisLoading, error:uerror }] =  useUpdateEmployeeMutation();
    function handleSubmit(e: any) {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const name = formData.get("name")?.toString() || '';
        const role = formData.get("role")?.toString() || '';
        const country=formData.get("country")?.toString() || ''
        const city=formData.get("city")?.toString() || ''
        const postal_code=formData.get("postal_code")?.toString() || ''
        const request:any={
                "id":ind,
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
    console.log(request)
    updateEmployee(request)
    }

    return(<>
                <div className="top-label">
                <span>Edit Employee</span>
                </div>
                <div className="form-area width-full">
                <form onSubmit={handleSubmit}>
                    <FormRow name1="Employee Name" name2="Employee ID" name3="Joining Date" value1={data?.["name"]} value2={data?.["name"]} value3={data?.["created_at"]} tag1="name"  tag2="id" tag3="created_at"/>
                    <FormRow name1="Role" name2="Status" name3="Experience" value1={data?.["role"]} value2={data?.["name"]} value3={data?.["name"]} tag1="role" tag2="status" tag3="experience"/>
                    
                    <div className="row">
                        <div>
                            <label>Address</label>
                            <div className="pair gap">
                                <input type="text" placeholder="Address" name="address"/>
                                <input type="text" placeholder="City" name="city"/>
                                <div className="country-postalcode" >
                                    <input type="text" placeholder="Country" className="width-half" name="country" value={data?.["country"]}/>
                                    <input type="text" placeholder="Postal Code" className="width-half" name= "postal_code" value="99999"/>
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
                        <input type="submit" value="Create" className="create-button" /> 
                        <input type="button" value="Cancel" className="cancel-button" />
                    </div>
                    
                </form>
            </div>
    
    </>)
}


export default EditEmployeeArea;

