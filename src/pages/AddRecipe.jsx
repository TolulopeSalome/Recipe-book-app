import React from 'react'
import { useRecipeContext } from '../context/RecipeContext'
import { useState } from 'react'

const AddRecipe = () => {
  const {recipes, setRecipes} = useRecipeContext();
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');

  // save to local storage
  React.useEffect(() => {
    localStorage.setItem('recipes', JSON.stringify(recipes));
  }, [recipes]);

  const handleSubmit = (e) => {
  e.preventDefault();
  const newRecipe = {
    id: Date.now(),
    title: title.trim(),
    ingredients: ingredients.trim(),
    instructions: instructions.trim(),
  };
  setRecipes([...recipes, newRecipe]);
  // Optional: clear form
  setTitle('');
  setIngredients('');
  setInstructions('');

  alert('Recipe added successfully!');
};

  return (

<div className="max-w-xl mx-auto p-6 bg-white rounded shadow mt-6">

<form onSubmit={handleSubmit}>
  <input
    className='w-full p-2 mb-4 border border-gray-300 rounded'
    type="text"
    value={title}
    onChange={(e) => setTitle(e.target.value)}
    placeholder="Recipe Title"
    required
  />
  <textarea
    className='w-full p-2 mb-4 border border-gray-300 rounded'
    value={ingredients}
    onChange={(e) => setIngredients(e.target.value)}
    placeholder="Ingredients"
    required
  />
  <textarea
    className='w-full p-2 mb-4 border border-gray-300 rounded'
    value={instructions}
    onChange={(e) => setInstructions(e.target.value)}
    placeholder="Instructions"
    required
  />
  <button type="submit" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Add Recipe</button>
</form>

</div>



  )
}

export default AddRecipe;