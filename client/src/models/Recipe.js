import { mockDataRecipes } from "../utils/mockData";

class Recipe {
    constructor(recipeData) {
      this.uid = recipeData.uid; // string
      this.name = recipeData.name; // string
      this.ingredients = recipeData.ingredients; //array
      this.instructions = recipeData.instructions; //array
      this.author = recipeData.author; // string
      this.authorId = recipeData.authorId; // string
      this.ratings = recipeData.ratings; // array
    }

    getAverageRating() {
        if (this.ratings.length === 0) {
            return "No ratings"
        }
        const numRatings = Object.keys(this.ratings).length
        let total = 0;
        for (let key in this.ratings) {
            total += parseInt(this.ratings[key])
        }
        return total/numRatings;
    }

    //TODO write CRUD methods, create, getAll, getByID, getByUser, update, delete

    static getByID = async (uid) => {
        //insert query to Firebase

        //using mock data:
        const recipes = mockDataRecipes;
        return recipes.filter((val)=>val.uid===uid)[0];
    }

    static getByUser = async (userUid) => {
        //TODO implement Firebase query
        const recipes = mockDataRecipes.filter((recipe)=>userUid===recipe.authorId);
        return recipes;
    }

    submitRating = async (uid, rating) => {
        console.log(`Submitted rating {${uid}: ${rating}}`)
        //TODO set up special update query to add rating
    }

  }

export default Recipe;