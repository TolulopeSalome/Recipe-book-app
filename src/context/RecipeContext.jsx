import { createContext, useState, useContext, useEffect } from "react";

const RecipeContext = createContext();

export const RecipeProvider = ({ children }) => {
  const [recipes, setRecipes] = useState(() => {
    const stored = localStorage.getItem("recipes");
    return stored ? JSON.parse(stored) : [];
  });

  // Load from localStorage or fallback to recipes.json
  useEffect(() => {
    const stored = localStorage.getItem("recipes");

    if (!stored) {
      fetch("/recipes.json")
        .then((response) => response.json())
        .then((data) => {
          setRecipes(data);
          localStorage.setItem("recipes", JSON.stringify(data));
        })
        .catch((error) => console.error("Error loading recipes:", error));
    } else {
      setRecipes(JSON.parse(stored));
    }
  }, []);

  // Delete a recipe by ID
  const deleteRecipe = (id) => {
    setRecipes((prev) => {
      const updated = prev.filter((recipe) => recipe.id !== id);
      localStorage.setItem("recipes", JSON.stringify(updated));
      return updated;
    });
  };

  // Edit/update a recipe by ID
  const editRecipe = (id, updatedRecipe) => {
    setRecipes((prev) => {
      const updated = prev.map((recipe) =>
        recipe.id === id ? updatedRecipe : recipe
      );
      localStorage.setItem("recipes", JSON.stringify(updated));
      return updated;
    });
  };

  // Favourites state
  const [favourites, setFavourites] = useState(() => {
    const stored = localStorage.getItem("favourites");
    return stored ? JSON.parse(stored) : [];
  });

  // ✅ Add to favourites (corrected casing)
  const addToFavourites = (recipe) => {
    setFavourites((prev) => {
      const updated = [...prev, recipe];
      localStorage.setItem("favourites", JSON.stringify(updated));
      return updated;
    });
  };

  const removeFromFavourites = (id) => {
    setFavourites((prev) => {
      const updated = prev.filter((recipe) => recipe.id !== id);
      localStorage.setItem("favourites", JSON.stringify(updated));
      return updated;
    });
  };

  const value = {
    recipes,
    setRecipes,
    deleteRecipe,
    editRecipe,
    favourites,
    addToFavourites,     // ✅ Fixed this
    removeFromFavourites
  };

  return (
    <RecipeContext.Provider value={value}>
      {children}
    </RecipeContext.Provider>
  );
};

// Custom hook for accessing the context
export const useRecipeContext = () => {
  return useContext(RecipeContext);
};

export default RecipeContext;
