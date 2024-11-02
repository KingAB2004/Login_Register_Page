import React from 'react';
import Login from "./login"
import Register from "./register"
export default function Main(){
    const [islogin ,isregister] = React.useState(false)
    function change(){
        isregister(!islogin)
    }
    return(
        <div>
            {!islogin &&<Register
            change={change} />}
            {islogin &&<Login />}
        </div>
    )
}