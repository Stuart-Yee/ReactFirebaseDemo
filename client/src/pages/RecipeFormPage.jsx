import PageTemplate from "./PageTemplate";
import RecipeForm from "../components/RecipeForm";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Recipe from "../models/Recipe";
import { useNavigate } from "react-router-dom";
import { getLoggedInUser } from "../utils/authentication";

const RecipeFormPage = () => {

    const navigate = useNavigate();
    const {recipeId} = useParams();

    const [recipe, setRecipe] = useState(null);

    useEffect(()=>{
        if (recipeId) {
            Recipe.getByID(recipeId)
                .then(res=>{setRecipe(res);
                })
        }
    },[recipeId]);

    const handleFormSubmit = (recipeData) => {
        //TODO send to Firebase
        if (recipe) {
            console.log("This will update an existing recipe");
            recipe.name = recipeData.name;
            recipe.ingredients = recipeData.ingredients;
            recipe.instructions = recipeData.instructions;
            //TODO use update function in firebase
            console.log("new recipe", recipe);
            navigate(`/viewRecipe/${recipe.uid}`)
        } else {
            console.log("this will create a new recipe");
            const user = getLoggedInUser();
            recipeData.authorId = user.uid;
            recipeData.author = `${user.firstName} ${user.lastName}`;
            recipeData.ratings = []
            const newRecipe = new Recipe(recipeData);
            console.log("The new recipe", newRecipe);
            //TODO this is a create method
            navigate(`/`)
        }

      };

    return(
        <PageTemplate>
            <div className="flex justify-center m-10">
                <RecipeForm 
                    onSubmit={handleFormSubmit} 
                    setRecipe={setRecipe}
                    recipeId={recipeId}
                    />
            </div>
            
        </PageTemplate>
    )
}

export default RecipeFormPage;