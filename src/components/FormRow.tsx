import "./form.css"
function FormRow({name1,name2,name3}:{name1:string,name2:string,name3:string}){
    return( <>
        <div className="row">
            <FormItem name={name1} />
            <FormItem name={name2} />
            <FormItem name={name3} />
            
         </div>
        </>
    )
}

function FormItem({name}:{name:string}){
    return (
        <>
        <div className="pair">
            <label>{name}</label>
            <input type="text" placeholder={name} />
        </div>
        </>
    )
}
export default FormRow;