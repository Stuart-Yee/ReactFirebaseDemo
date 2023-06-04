import { useState } from "react";
import User from "../models/User";
import { login, logout, checkLogin, getLoggedInUser } from "../utils/authentication";

const LoginWidget = (props) => {
    const [loggedIn, setLoggedIn] = useState(checkLogin());

    const logoutHandler = () => {
        logout();
        setLoggedIn(false);
    }

    const loginHandler = () => {
        login()
            .then(res=>{
                if (res) {
                    setLoggedIn(true);
                }
            })
    }

    return (
        <>
        {loggedIn?
            <>
            <p>Logged In as: {getLoggedInUser().firstName}</p>
            <img src={getLoggedInUser().photoURL} alt="profile"/>
            <button onClick={logoutHandler}>Logout</button> 
            </>
            :
            <button onClick={loginHandler}>Login</button>
        }
        </>
    )
}

export default LoginWidget;