import PageTemplate from "./PageTemplate";
import RecipesList from "../components/RecipesList";

const ChefPage = () => {
    return(
        <PageTemplate>
            <div className="flex justify-center m-10">
                <RecipesList/>
            </div>
            
        </PageTemplate>
    )
}

export default ChefPage;