import { useContext } from "react";
import { login, logout, getLoggedInUser } from "../utils/authentication";
import { LoggedInContext } from "../context/LoggedInContext";

const LoginWidget = () => {
    
    const { isLoggedIn, setIsLoggedIn } = useContext(LoggedInContext);

    const logoutHandler = () => {
        logout();
        setIsLoggedIn(false)
    }

    const loginHandler = () => {
        login()
            .then(res => {
                if (res) {
                    setIsLoggedIn(true);
                }
            })
    }

    return (
        <>
            {isLoggedIn ?
                <div className="w-1/4 m-5">
                    <div 
                        className="flex text-white">
                        <img
                            className="rounded-full profile-pic border-amber-400 border-2"
                            src={getLoggedInUser().photoURL}
                            alt="profile" />
                        <div>
                            <p>Logged In as: </p>
                            <p>{getLoggedInUser().firstName}</p>
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                onClick={logoutHandler}
                            >Logout</button>
                        </div>
                    </div>
                </div>
                :
                <div className="w-1/4 m-5">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={loginHandler}
                    >Login</button>
                </div>
            }
        </>
    )
}

export default LoginWidget;