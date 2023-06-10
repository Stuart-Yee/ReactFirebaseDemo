import { Link } from "react-router-dom";
import { getLoggedInUser } from "../utils/authentication";
import { useEffect } from "react";

const UserOptions = (props) => {

    const user = getLoggedInUser();

    return (
        <div>
            <ul>
                <li className="text-yellow-300">
                    <Link to="/recipes/create">Create a Recipe</Link>
                </li>
                <li className="text-yellow-300">
                    <Link to={`/recipes/byUser/${user.uid}`}>View My Recipes</Link>
                </li>
            </ul>
        </div>
    )
}

export default UserOptions;