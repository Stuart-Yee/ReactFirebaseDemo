import React, { useState } from 'react';

const RecipeForm = ({ onSubmit, recipe }) => {
  const [name, setName] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [instructions, setInstructions] = useState([]);

  useState(()=>{
    if (recipe) {
        setName(recipe.name);
        const joinedIngredients = recipe.ingredients.join("\n");
        const joinedInstructions = recipe.instructions.join("\n");
        setIngredients(joinedIngredients);
        setInstructions(joinedInstructions);
    }
  },[recipe])

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleIngredientsChange = (e) => {
    const ingredientsArray = e.target.value.split('\n');
    setIngredients(ingredientsArray);
  };

  const handleInstructionsChange = (e) => {
    const instructionsArray = e.target.value.split('\n');
    setInstructions(instructionsArray);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const recipeData = {
      name,
      ingredients,
      instructions,
    };
    onSubmit(recipeData);
    // Reset form fields
    setName('');
    setIngredients([]);
    setInstructions([]);
  };

  return (
    <form onSubmit={handleSubmit} className="w-10/12 mx-auto p-4 bg-white shadow rounded h-full">
      <div className="mb-4">
        <label htmlFor="name" className="block font-medium mb-2">
          Name:
        </label>
        <input
          type="text"
          id="name"
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          value={name}
          onChange={handleNameChange}
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="ingredients" className="block font-medium mb-2">
          Ingredients:
        </label>
        <textarea
          id="ingredients"
          className="h-44 w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          value={ingredients.join('\n')}
          onChange={handleIngredientsChange}
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="instructions" className="block font-medium mb-2">
          Instructions:
        </label>
        <textarea
          id="instructions"
          className="h-44 w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          value={instructions.join('\n')}
          onChange={handleInstructionsChange}
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
      >
        Submit
      </button>
    </form>
  );
};

export default RecipeForm;
