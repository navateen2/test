
import { useState } from "react"
import "./form.css"
import FormArea from "./FormArea"

import SideBar from "./SideBar"
import EmployeeList from "./EmployeeList"
import { createBrowserRouter, Outlet } from "react-router"
import { RouterProvider } from "react-router/dom"

function Page(){
    
    let [toggle,setToggle] = useState(true)
    function toggler(){
        setToggle((e:boolean)=>!e)
    }
    return (
   <>
   <nav className="navbar">
        <img src="/src/assets/kv logo.png" alt="" onClick={toggler}/>
    </nav>
    <div className="main-page">
        <SideBar />
        <div className="main-space">
            
            <Outlet />

        </div>
    </div>
   </>     


    )
}

export default Page