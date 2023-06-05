import LoginWidget from "./LoginWidget";
import { Link } from "react-router-dom";

const NavBar = () => {

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
            <LoginWidget/>
        </nav>
        
    )
}
export default NavBar;