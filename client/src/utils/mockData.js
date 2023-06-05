import Recipe from "../models/Recipe"

const recipe1 = {
    "uid": "12f",
    "name": "Spaghetti Bolognese",
    "ingredients": [
        "500g ground beef",
        "1 onion, chopped",
        "2 cloves of garlic, minced",
        "400g canned tomatoes",
        "2 tablespoons tomato paste",
        "1 teaspoon dried oregano",
        "1 teaspoon dried basil",
        "Salt and pepper to taste",
        "300g spaghetti",
        "Grated Parmesan cheese for garnish"
    ],
    "instructions": [
        "Heat oil in a large skillet over medium heat.",
        "Add the onion and garlic, and cook until softened.",
        "Add the ground beef and cook until browned.",
        "Stir in the canned tomatoes, tomato paste, oregano, basil, salt, and pepper.",
        "Simmer the sauce for 20 minutes, stirring occasionally.",
        "Meanwhile, cook the spaghetti according to package instructions.",
        "Serve the spaghetti with the Bolognese sauce on top.",
        "Garnish with grated Parmesan cheese."
    ],
    "author": "Chef John",
    "ratings": [
        {"uid": "user1", "score": 4},
        {"uid": "user2", "score": 5},
        {"uid": "user3", "score": 3},
        {"uid": "user4", "score": 4}
    ]
}

const recipe2 = {
    "uid": "12adfd",
    "name": "Chicken Stir-Fry",
    "ingredients": [
        "2 boneless, skinless chicken breasts",
        "2 tablespoons soy sauce",
        "1 tablespoon sesame oil",
        "1 tablespoon cornstarch",
        "2 tablespoons vegetable oil",
        "1 red bell pepper, sliced",
        "1 green bell pepper, sliced",
        "1 carrot, sliced",
        "1 cup broccoli florets",
        "2 cloves of garlic, minced",
        "1 teaspoon grated ginger",
        "Salt and pepper to taste",
        "Cooked rice for serving"
    ],
    "instructions": [
        "Slice the chicken breasts into thin strips.",
        "In a bowl, mix together soy sauce, sesame oil, and cornstarch. Add the chicken and marinate for 15 minutes.",
        "Heat vegetable oil in a wok or large skillet over high heat.",
        "Add the chicken to the pan and stir-fry until cooked through.",
        "Add the sliced bell peppers, carrot, broccoli, garlic, and ginger. Stir-fry for a few minutes until the vegetables are tender-crisp.",
        "Season with salt and pepper to taste.",
        "Serve the stir-fry over cooked rice."
    ],
    "author": "Chef Emily",
    "ratings": [
        {"uid": "user1", "score": 5},
        {"uid": "user2", "score": 4},
        {"uid": "user3", "score": 4},
        {"uid": "user4", "score": 3},
        {"uid": "user5", "score": 5}
    ]
}

export const mockDataRecipes = [
    new Recipe(recipe1), 
    new Recipe(recipe2)
]
