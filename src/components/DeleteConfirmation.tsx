

function DeleteConfirmation({index}:{index:number}){
    return (
        <div className="overlay">
            <div className="dialog-box">
                <div className="dialog-text">
                <span className="dialog-top-text">Are you sure ?</span>
                <span className="dialog-bottom-text">Do you really want to delete employee?</span>
                </div>
                <div className="dialog-button-row">
                    <button className="dialog-button-cancel">
                        Cancel
                    </button>
                    <button className="dialog-button-confirm">
                        Confirm
                    </button>

                </div>
            </div> 
        </div>
    )

}

export default DeleteConfirmation