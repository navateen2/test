import { useDeleteEmployeeMutation } from "../employee/api";


function DeleteConfirmation({index,setDialog}:{index:number,setDialog:any}){
    const [deleteEmployee, { isLoading, error }] = useDeleteEmployeeMutation();
    function confirm(){
        deleteEmployee(index)
    }

    return (
        <div className="overlay">
            <div className="dialog-box">
                <div className="dialog-text">
                <span className="dialog-top-text">Are you sure ?</span>
                <span className="dialog-bottom-text">Do you really want to delete employee?</span>
                </div>
                <div className="dialog-button-row">
                    <button className="dialog-button-cancel" onClick={()=>{setDialog(-1)}}> 
                        Cancel
                    </button>
                    <button className="dialog-button-confirm" onClick={()=>{confirm();setDialog(-1)}}>
                        Confirm
                    </button>

                </div>
            </div> 
        </div>
    )

}

export default DeleteConfirmation