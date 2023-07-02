import { mockDataRecipes } from "../utils/mockData";
import { db } from "../utils/firebaseConfig";
import { 
    collection, 
    addDoc, 
    setDoc, 
    doc, 
    getDocs, 
    getDoc, 
    query, 
    where,
    updateDoc
} 
    from "firebase/firestore";

class Recipe {

    static COLLECTION_NAME = "Recipes";
    static COLLECTION = collection(db, Recipe.COLLECTION_NAME);


    constructor(recipeData) {
      this.uid = recipeData.uid; // string
      this.name = recipeData.name; // string
      this.ingredients = recipeData.ingredients; //array
      this.instructions = recipeData.instructions; //array
      this.author = recipeData.author; // string
      this.authorId = recipeData.authorId; // string
      this.ratings = recipeData.ratings; // array
    }

    static converter = {
        toFirestore: (recipe) => {
            return {
                name: recipe.name,
                ingredients: recipe.ingredients, // array
                instructions: recipe.instructions, // array
                author: recipe.author, // string
                authorId: recipe.authorId, // string
                ratings: recipe.ratings, // array
            }
        },
        fromFirestore: (snapshot, options) => {
            const data = snapshot.data(options);
            return new Recipe(data);
        }
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

    async create() {
        const res = await addDoc(Recipe.COLLECTION, {}) //generate a placeholder ID
        const ref = doc(db, Recipe.COLLECTION_NAME, res.id) // get document reference with converter
            .withConverter(Recipe.converter); 
        await setDoc(ref, this);
        console.log("UID of new recipe", res.id);
        return res.id;
    }

    static async getAll() {
        const querySnapshot = await getDocs(Recipe.COLLECTION);
        const items = []
        querySnapshot.forEach((doc) => {
        //   console.log(`${doc.id} => ${doc.data()}`);
        //   console.log(doc.data())
          const record = doc.data();
          record.uid = doc.id;
          items.push(new Recipe(record))
        });
        return items;
        //return mockDataRecipes;

    }

    static getByID = async (uid) => {
        //insert query to Firebase

        const docRef = doc(db, Recipe.COLLECTION_NAME, uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            const recipeData = docSnap.data();
            recipeData.uid = uid;
            return new Recipe(recipeData);
        } else {
            return "Not found";
        }

        //using mock data:
        // const recipes = mockDataRecipes;
        // return recipes.filter((val)=>val.uid===uid)[0];
    }

    static getByUser = async (userUid) => {
        //TODO implement Firebase query

        const recipes = [];
        const q = query(Recipe.COLLECTION, where("authorId", "==", userUid));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((snapshot)=>{
            const document = snapshot.data();
            document.uid = snapshot.id;
            recipes.push(new Recipe(document));
        })

        //Mock data:
        // const recipes = mockDataRecipes.filter((recipe)=>userUid===recipe.authorId);
        return recipes;
    }

    submitRating = async (uid, rating) => {
        console.log(`Submitted rating {${uid}: ${rating}}`)
        console.log("Rating for ", this.uid);
        //TODO set up special update query to add rating
        const recipeRef = doc(db, Recipe.COLLECTION_NAME, this.uid);
        this.ratings[uid] = rating;
        console.log(this)
        const ref = recipeRef // get document reference with converter
            .withConverter(Recipe.converter); 
        await setDoc(ref, this);
    }

  }

export default Recipe;