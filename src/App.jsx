import {Routes, Route, Link} from "react-router-dom";
import Home from "./pages/Home";
import RecipeDetails from "./pages/RecipeDetails";
import AddRecipe from "./pages/AddRecipe";
import Navbar from "./components/Navbar";
import Favourites from "./pages/Favourites";  
import About from "./pages/About";


function App() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
        <Route path="/add" element={<AddRecipe />} />
        <Route path="/about" element={<About name = "About" />}/>
        <Route path="/favourites" element={<Favourites/>} />
        
      </Routes>
      </div>
    </>
  );
}

export default App;
