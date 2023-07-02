import PageTemplate from "./PageTemplate";
import { useParams } from "react-router-dom";
import Recipe from "../models/Recipe";
import { useState, useEffect, useContext } from "react";
import RateIt from "../components/RateIt";
import { LoggedInContext } from "../context/LoggedInContext";
import { getLoggedInUser } from "../utils/authentication";
import { Link } from "react-router-dom";

const RecipePage = () => {
    const { recipeId } = useParams()

    const { isLoggedIn } = useContext(LoggedInContext);

    const [recipe, setRecipe] = useState();

    const [isOwned, setIsOwned] = useState(false);

    useEffect(() => {
        Recipe.getByID(recipeId)
            .then((res) => {
                setRecipe(res);
                const user = getLoggedInUser();
                if (user) {
                    user.uid === res.authorId ? setIsOwned(true) : setIsOwned(false);
                }
            })
    }, [recipeId])

    return (
        <PageTemplate>
            <div className="flex justify-center m-10">
                {recipe ?
                    <div>
                        <p className="text-3xl m-5">
                            {recipe.name}
                        </p>
                        <p className="text-xl mb-3">
                            By: {recipe.author}
                        </p>
                        <p className="text-lg mb-3">
                            Average Rating: {recipe.getAverageRating()}
                        </p>
                        {isLoggedIn ? <RateIt recipe={recipe}/> : <></>}
                        {isOwned ? 
                            <Link to={`/recipes/edit/${recipe.uid}`}>Edit</Link>
                            :<></>}
                        <div 
                            className="bg-orange-50 m-2 border-2 rounded-md p-2"
                            >
                            <p className="text-lg mb-2">
                            Ingredients:
                        </p>
                            {recipe.ingredients.map((ing, idx) => {
                                return (<p key={idx}>{ing}</p>)
                            })}
                        </div>
                        
                        <div className="bg-orange-50 mb-2 border-2 rounded-md p-2">
                        <p className="text-lg mb-2">
                            Instructions:
                        </p>
                            {recipe.instructions.map((step, idx) => {
                                return <p key={idx}>{step}</p>
                            })}
                        </div>
                    </div>
                    : <p>Retrieving recipe...</p>}
            </div>

        </PageTemplate>
    )
}

export default RecipePage;