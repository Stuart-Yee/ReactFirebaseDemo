import PageTemplate from "./PageTemplate";
import RecipeForm from "../components/RecipeForm";

const RecipeFormPage = () => {

    const handleFormSubmit = (recipeData) => {
        console.log(recipeData); // Perform your desired logic with the recipe data
      };

    return(
        <PageTemplate>
            <div className="flex justify-center m-10">
                <RecipeForm onSubmit={handleFormSubmit} />
            </div>
            
        </PageTemplate>
    )
}

export default RecipeFormPage;