import { useState } from "react"
// import Input from "./Input.tsx"
import "./kv.css"

import { Link, useNavigate } from "react-router"
import { useLoginMutation } from "../api-service/auth/login.api";
import { Navigate } from "react-router";



function loginPage() {
    const navigate = useNavigate()
    const [login] = useLoginMutation();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const onLogin = async () => {
        const params = new URLSearchParams({
            username: username,
            password: password
        });

        const response = await login(params);
        localStorage.setItem("token", response?.data?.access_token);

        navigate("/employee");

    };


    return <>
        <div className="container">
            <div className="left"><img src="/src/assets/Mask group.png" /></div>
            <div className="right">
                <div className="vbox">
                    <div>
                        <img src="/src/assets/kv logo.png" alt="" />
                        <form className="vbox">
                            <input className="login-input" type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} data-testid="username-field" />
                            <span style={{ color: "red" }}>
                                {(username.includes('@') || username.length == 0) ? null : <>Email must contain @<br /></>}
                                {(username.length >= 8 || username.length == 0) ? null : <>Email should have more than 8 characters</>}
                            </span>
                            <input className="login-input" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} data-testid="password-field" />

                            <input type="button" value="Login" className="button login-input" onClick={onLogin} data-testid="submit-button" />

                        </form>
                    </div>

                </div>
            </div>
        </div>
    </>

}
export default loginPage

/*
<input type="text"  onChange={(e) => {setWord(e.target.value); setResult(filt(e.target.value))}}/>
                    <>{result}</>
     let [word,setWord]=useState("")
    let [result,setResult]=useState<string[]>([])

    function filt(word:string){
        return productNames.filter((item)=>item.includes(word))

    }
*/

