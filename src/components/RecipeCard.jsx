import React, { useState } from 'react';
import { useRecipeContext } from '../context/RecipeContext';

const RecipeCard = ({ recipe, onEdit, onDelete, isFavouritePage=false}) => {
   const { favourites, addToFavourites, removeFromFavourites } = useRecipeContext();
  const isFavourited
   = favourites.some((r) => r.id === recipe.id);
  const [expanded, setExpanded] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedRecipe, setEditedRecipe] = useState({ ...recipe });
  
  const toggleExpand = () => setExpanded(!expanded);

  const displayedInstructions = expanded
    ? recipe.instructions
    : recipe.instructions.slice(0, 100) + (recipe.instructions.length > 100 ? '...' : '');


   

  return (
    <div className="bg-blue-200 p-4 rounded shadow">
      <h2 className="text-lg font-semibold mb-2">{recipe.title}</h2>

      <div className="mb-2">
        <span className="font-semibold block">Ingredients:</span>
        <p>{recipe.ingredients}</p>
      </div>

      <div>
        <span className="font-semibold block">Instructions:</span>
        <ol className="list-decimal ml-5">
          {displayedInstructions.split('\n').map((instruction, index) => (
            <li key={index}>{instruction}</li>
          ))}
        </ol>
        {recipe.instructions.length > 100 && (
          <button
            onClick={toggleExpand}
            className="text-sm text-blue-600 mt-2 underline"
          >
            {expanded ? 'Show Less' : 'Read More'}
          </button>
        )}
      </div>

      {/* Buttons and Edit Form */}
      {!isEditing ? (
        // Default view: Edit and Delete buttons on the same row
        <div className="flex justify-between mt-4">
          <button
            className="bg-blue-500 hover:bg-blue-600 transition-colors text-white px-4 py-2 rounded mr-2"
            onClick={() => setIsEditing(true)}
          >
            Edit
          </button>
          <button
            className="bg-red-500 hover:bg-red-600 transition-colors text-white px-4 py-2 rounded"
            onClick={() => onDelete(recipe.id)}
          >
            Delete
          </button>
        </div>
      ) : (
        // Editing mode: Form + Delete below
        <div className="mt-4">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              onEdit(editedRecipe);
              setIsEditing(false);
            }}
          >
            <input
              type="text"
              value={editedRecipe.title}
              onChange={(e) =>
                setEditedRecipe({ ...editedRecipe, title: e.target.value })
              }
              className="block w-full border rounded px-2 py-1 mb-2"
            />
            <textarea
              value={editedRecipe.ingredients}
              onChange={(e) =>
                setEditedRecipe({ ...editedRecipe, ingredients: e.target.value })
              }
              className="block w-full border rounded px-2 py-1 mb-2"
            />
            <textarea
              value={editedRecipe.instructions}
              onChange={(e) =>
                setEditedRecipe({ ...editedRecipe, instructions: e.target.value })
              }
              className="block w-full border rounded px-2 py-1 mb-2"
            />
            <div className="flex gap-2">
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-1 rounded"
              >
                Save
              </button>
              <button
                type="button"
                onClick={() => setIsEditing(false)}
                className="bg-gray-300 px-4 py-1 rounded"
              >
                Cancel
              </button>
            </div>
          </form>
          {/* Delete button appears below the form */}
          <button
            className="mt-4 bg-red-500 hover:bg-red-600 transition-colors text-white px-4 py-2 rounded"
            onClick={() => onDelete(recipe.id)}
          >
            Delete
          </button>
        </div>
      )}

     <button
        onClick={() =>
          isFavourited ? removeFromFavourites(recipe.id) : addToFavourites(recipe)
        }
        className={`mt-2 px-4 py-1 rounded text-white ${
          isFavourited ? "bg-red-500" : "bg-blue-500"
        }`}
      >
        {isFavourited ? "Unfavourite" : "Add to Favourites"}
      </button>
    </div>
  );
};


export default RecipeCard;
