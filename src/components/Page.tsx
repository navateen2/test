
import { Suspense, useState } from "react"
import "./form.css"
import FormArea from "./FormArea"

import SideBar from "./SideBar"
// import EmployeeList from "./EmployeeList"
import { createBrowserRouter, Outlet } from "react-router"
// import { RouterProvider } from "react-router/dom"
import Error from "./Error"
import { useNavigate } from "react-router"
import Chat from "./chat"



function Page() {
    const Navigate = useNavigate()
    return (

        <>
            <nav className="navbar">
                <img src="/src/assets/kv logo.png" alt="" onClick={() => { Navigate("/employee") }} />
            </nav>
            <div className="main-page">
                <SideBar />
                <div className="main-space">
                    <Suspense fallback={<Error />}>
                        <Outlet />
                    </Suspense>
                    <Chat />

                </div>
            </div>
        </>


    )
}

export default Page

export const employees = [
    ["Vishal M", "Lazada", "12.04.2021", "Full Stack", "Probation", "5 Years"],
    ["Susan Kurian", "XYZ", "12.04.2021", "UI Engineer", "Probation", "7 Years"],
    ["Yugesh", "XYZ", "12.04.2021", "Devops", "Active", "6 Years"],
    ["Midhun", "Lazada", "12.04.2021", "Full Stack", "Active", "5 Years"],
    ["Abhijith", "XYZ", "12.04.2021", "UI Engineer", "Inactive", "7 Years"],
    ["Aiswarya", "XYZ", "12.04.2021", "Devops", "Active", "6 Years"],
    ["Fayis", "Lazada", "12.04.2021", "Full Stack", "Active", "5 Years"],
    ["Vennila", "XYZ", "12.04.2021", "UI Engineer", "Active", "7 Years"],
    ["Stephen John", "XYZ", "12.04.2021", "Devops", "Active", "6 Years"],
    ["Monica", "Lazada", "12.04.2021", "Full Stack", "Active", "5 Years"],
    ["Rachel", "XYZ", "12.04.2021", "UI Engineer", "Active", "7 Years"],
];