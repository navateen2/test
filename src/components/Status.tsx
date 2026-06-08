function Status(props:{type:string}){
    return(
    <div className={"status "+props.type}>
        {props.type}
    </div>
    
    
    )
}

export default Status;