import PageTemplate from "./PageTemplate";
import { useParams } from "react-router-dom";
import Recipe from "../models/Recipe";
import { useState, useEffect } from "react";

const RecipePage = () => {
    const { recipeId } = useParams()

    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        Recipe.getByID(recipeId)
            .then((res) => {
                setRecipe(res);
            })
    }, [])

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
                            Average Rating: {recipe.getAverageRating()}</p>
                        
                        <div 
                            className="bg-orange-50 mb-2 border-2 rounded-md p-2"
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