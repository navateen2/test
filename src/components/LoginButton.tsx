import "./kv.css"






function LoginButton(prop:{onClick:()=>void}){
    return <>
    <input type="button" value="Login" className="button" onClick={prop.onClick} />
    {/* <button type="submit" className="button submit-input" value="hiiii" /> */}
    </>

}

export default LoginButton