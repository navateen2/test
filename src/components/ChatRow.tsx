interface ChatRowProp {
    text?: React.ReactNode,
    sender: string
}

function ChatRow({text ="", sender}: ChatRowProp) {
    return(
    <>
        <div className = {sender === "me" ? "mychatcontainer" : "yourchatcontainer"}>
            <div className={sender === "me" ? "mychat" : "yourchat"}>
                {text}
            </div>
        </div>
    </>
    )
}

export default ChatRow;