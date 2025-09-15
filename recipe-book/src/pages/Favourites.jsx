import React from 'react';
import { useRecipeContext } from '../context/RecipeContext';
import RecipeCard from '../components/RecipeCard';

const Favourites = () => {
  const { favourites, deleteRecipe, editRecipe } = useRecipeContext();

  const handleDelete = (id) => {
    deleteRecipe(id);
  };

  const handleEdit = (updatedRecipe) => {
    editRecipe(updatedRecipe.id, updatedRecipe);
  };

  return (
    <div className="mt-8 flex items-center justify-center px-4 bg-gray-100">
      <div className="w-full max-w-6xl bg-blue-100 p-8 rounded shadow">
        <h1 className="text-2xl font-bold mb-4 text-blue-500 text-center">Favourites</h1>
        {favourites.length === 0 ? (
          <p className="text-center">You have no favourite recipes yet.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {favourites.map((recipe) => (
              <RecipeCard
                key={recipe.id}
                recipe={recipe}
                onEdit={handleEdit}
                onDelete={handleDelete}
                isFavouritePage={true}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Favourites;
