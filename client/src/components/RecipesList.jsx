import { useEffect, useState, useContext } from "react";
import { mockDataRecipes } from "../utils/mockData";
import { LoggedInContext } from "../context/LoggedInContext";
import { Link, useParams } from "react-router-dom";
import Recipe from "../models/Recipe";

const RecipesList = (props) => {
    //prop pagination will set a specific amount of recipes

    const {userId} = useParams();

    const [recipes, setRecipes] = useState([]);

    // eslint-disable-next-line
    const {isLoggedIn, setIsLoggedIn} = useContext(LoggedInContext);

    useEffect(()=>{
        //TODO hook up to Firestore database
        //Using mockdata for now
        if (userId) {
            Recipe.getByUser(userId)
                .then(recArr=>{
                    console.log(recArr);
                    setRecipes([...recArr]);
                })
                .catch(err=>console.log(err));
        } else {
            Recipe.getAll()
                .then(results=>setRecipes([...results]))
                .catch(err=>console.log(err))
        }
        
    }, [])

    return(
        <table className="min-w-full text-left text-sm font-light">
            <thead className="border-b font-medium dark:border-neutral-500">
                <tr>
                    <th className="px-6 py-4">Recipe</th>
                    <th className="px-6 py-4">Author</th>
                    <th className="px-6 py-4">Average Rating</th>
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
                            <Link to={`/recipes/byUser/${val.authorId}`}>{val.author}</Link>
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                            {val.getAverageRating()}
                        </td>
                    </tr>)
                })}
            </tbody>
        </table>
    )

}

export default RecipesList;