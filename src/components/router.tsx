import { createBrowserRouter } from "react-router";

import LoginPage from "./LoginPage";
// import Page from "./Page";
import FormArea from "./FormArea";
import EmployeeList from "./EmployeeList";
import Error from "./Error";
import { Navigate } from "react-router";
import EmployeeDetails from "./EmployeeDetails";


// const EmployeeDetails = React.lazy(() =>
//   Promise.all([
//     import("./EmployeeDetails"),
//     new Promise(resolve => setTimeout(resolve, 1000))
//   ]).then(([module]) => module)
// );


import React from "react";
const Page = React.lazy(() => import("./Page"))


function PrivateRoute(props:{children:React.ReactNode}){
    const token =localStorage.getItem("token")
    if(token){
        return(props.children)
    }
    else{
        return(
        <Navigate to="/login"/>
        )
    }

} 

const router = createBrowserRouter([
    {
        path: "/login",
        element: <LoginPage />
    },
    {
        path: "/employee",
        element: (<PrivateRoute><Page /></PrivateRoute>),
        children: [
            {index:true,element:<EmployeeList />},
            {path: "create", element: <FormArea /> },
            {path: "details/:id" , element: <EmployeeDetails/>}
        ]
    },
    {
        path: "*",
        element: <Error />
    }

])

export default router;