import whatsapp from "/src/assets/icon.svg"
import frame from "/src/assets/send.svg";
import "./chat.css";
import dots from "/src/assets/dots.svg";
import ChatRow from "./ChatRow";
import streamChatResponse from "./utils/chatResponse";
import { useCallback, useRef, useState } from "react";
import { input } from "@testing-library/user-event/dist/cjs/event/input.js";

interface ChatMessage {
  role: string,
  text: string
}

export function useSSE() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isStreaming, setIsStreaming] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const abortRef = useRef<AbortController | null>(null);

  const sendMessage = useCallback(async (prompt: string) => {
    abortRef.current?.abort();
    abortRef.current = new AbortController();
    setError(null);
    setIsStreaming(true);

    setMessages((prev) => [...prev,
    { role: 'user', text: prompt },
    { role: 'assistant', text: '' },
    ]);

    try {
      await streamChatResponse(prompt, (accumulated) => {
        setMessages((prev) => {
          const next = [...prev];
          next[next.length - 1] = { role: 'assistant', text: accumulated };
          return next;
        });
      }, abortRef.current.signal);
    } catch (e) {
      if ((e as Error).name !== 'AbortError') {
        setError((e as Error).message);
      }
    } finally {
      setIsStreaming(false);
    }
  }, []);

  return { messages, isStreaming, error, sendMessage };
}




function Chat() {
  const { messages, isStreaming, error, sendMessage } = useSSE()
  const [message,setMessage] = useState("")
  function send() {
    sendMessage(message)
    const input_box=document.getElementById("input-box")
    input_box.value=""
  }
  return (
    <div className="chat-parent">
      <div className="top-row"> <img src={whatsapp} /> <p>Help Desk</p> </div>
      <div className="bottom-row">
        <div className="chats">
          {messages.map((a) => {
            return <ChatRow text={a.text} sender={(a.role==='assistant')?"you":"me"}/>

          })}
          {/* <div className="yourchatcontainer">
            <div className="loadchat">
              <img src={dots} />
            </div>
          </div> */}
        </div>
        <div className="sendmessage">
          <input className="messageinput" placeholder="Type your message here ..." id = "input-box" onChange={(e)=>{setMessage( e.target.value);}}/>
          <img src={frame} className="send-button" onClick={send} />
        </div>
      </div>
    </div>
  );
}

export default Chat;

