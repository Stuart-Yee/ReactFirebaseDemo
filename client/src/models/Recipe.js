import { mockDataRecipes } from "../utils/mockData";

class Recipe {
    constructor(recipeData) {
      this.uid = recipeData.uid;
      this.name = recipeData.name;
      this.ingredients = recipeData.ingredients;
      this.instructions = recipeData.instructions;
      this.author = recipeData.author;
      this.ratings = recipeData.ratings;
    }

    getAverageRating() {
        if (this.ratings.length === 0) {
            return "No ratings"
        }
        const numRatings = this.ratings.length;
        let total = 0;
        this.ratings.forEach(rating=>total+=rating.score);
        return total/numRatings;
    }

    //TODO write CRUD methods, create, getAll, getByID, getByUser, update, delete

    static getByID = async (uid) => {
        //insert query to Firebase

        //using mock data:
        const recipes = mockDataRecipes;
        return recipes.filter((val)=>val.uid===uid)[0];
    }

  }

export default Recipe;