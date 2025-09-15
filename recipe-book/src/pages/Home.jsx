import React from "react";
import { useRecipeContext } from "../context/RecipeContext";
import RecipeCard from "../components/RecipeCard";

const Home = () => {
  const { recipes, deleteRecipe, editRecipe} = useRecipeContext();

  const handleDelete = (id) => {
    console.log ("Delete recipe with ID:", id);
    deleteRecipe(id);
  };
const handleEdit = (updatedRecipe) => {
  console.log ("Edit recipe:", updatedRecipe);
  editRecipe(updatedRecipe.id, updatedRecipe);
};


  return (
    <div className="mt-8 flex items-center justify-center px-4 bg-gray-100">
      <div className="w-full max-w-6xl bg-white p-8 rounded shadow">
        <h1 className="text-2xl font-bold mb-4 text-blue-400 text-center">All Recipes</h1>
        {recipes.length === 0 ? (
          <p>No recipes found</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} onEdit={handleEdit} onDelete={handleDelete}  />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};


export default Home;
