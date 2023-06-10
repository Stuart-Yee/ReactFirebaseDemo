import LoginWidget from "./LoginWidget";
import { Link } from "react-router-dom";
import { LoggedInContext } from "../context/LoggedInContext";
import { useContext } from "react";
import UserOptions from "./UserOptions";

const NavBar = () => {

    const {isLoggedIn} = useContext(LoggedInContext)

    return(
        <nav className="nav-bar flex justify-between items-center">
            <img 
                alt="Logo"
                className="h-full"
                src={require("../assets/logo.png")}/>
            <Link to="/">
            <p className="text-4xl text-amber-400 font-serif">
                Your Family's Recipes
            </p>
            </Link>
            {isLoggedIn ? <UserOptions/> : <></>}
            <LoginWidget/>
        </nav>
        
    )
}
export default NavBar;