import whatsapp from "/src/assets/icon.svg"
import frame from "/src/assets/send.svg";
import "./chat.css";
import dots from "/src/assets/dots.svg";
import ChatRow from "./ChatRow";
function Chat() {
  return (
    <div className="chat-parent">
      <div className="top-row"> <img src={whatsapp} /> <p>Help Desk</p> </div>
      <div className="bottom-row">
        <div className="chats">
          <ChatRow text="i went to china" sender="me" />
          <ChatRow text="i went to china" sender="you" />
          <div className="yourchatcontainer">
            <div className="loadchat">
              <img src={dots} />
            </div>
          </div>
        </div>
        <div className="sendmessage"> <input className="messageinput" placeholder="Type your message here ..." />
          <img src={frame} className="send-button"/>
        </div>
      </div>
    </div>
  );
}

export default Chat;