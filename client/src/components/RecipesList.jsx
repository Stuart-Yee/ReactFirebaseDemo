import { useEffect, useState, useContext } from "react";
import { mockDataRecipes } from "../utils/mockData";
import { LoggedInContext } from "../context/LoggedInContext";
import { Link } from "react-router-dom";

const RecipesList = (props) => {
    //prop pagination will set a specific amount of recipes

    const [recipes, setRecipes] = useState([]);

    // eslint-disable-next-line
    const {isLoggedIn, setIsLoggedIn} = useContext(LoggedInContext);

    useEffect(()=>{
        //TODO hook up to Firestore database
        //Using mockdata for now
        setRecipes([...mockDataRecipes]);
    }, [])

    return(
        <table className="min-w-full text-left text-sm font-light">
            <thead className="border-b font-medium dark:border-neutral-500">
                <tr>
                    <th className="px-6 py-4">Recipe</th>
                    <th className="px-6 py-4">Author</th>
                    <th className="px-6 py-4">Average Rating</th>
                    {isLoggedIn?
                        <th className="px-6 py-4">Actions</th> :
                        <></>
                    }
                </tr>
            </thead>
            <tbody>
                {recipes.map((val, idx)=>{
                    return(
                    <tr key={idx} className="border-b dark:border-neutral-500">
                        <td className="whitespace-nowrap px-6 py-4">
                            <Link to={`/viewRecipe/${val.uid}`}>{val.name}</Link>
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                            {val.author}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                            {val.getAverageRating()}
                        </td>
                        {isLoggedIn? 
                            <td className="whitespace-nowrap px-6 py-4">Like</td> :
                            <></> }
                    </tr>)
                })}
            </tbody>
        </table>
    )

}

export default RecipesList;