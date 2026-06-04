import "./Input.css"


function Input({type="text", placeholder=""}:{type:string,placeholder:string}){
    return <>
    <input type={type} placeholder={placeholder}  />
    </>
}

export default Input