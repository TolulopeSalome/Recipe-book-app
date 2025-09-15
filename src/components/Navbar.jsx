import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"
import logo from "../assets/recipe-img.png"


const Navbar = () => {
  return (
     <nav className="flex items-center justify-between px-4 py-4 bg-blue-400 text-white shadow-md">
  <Link to="/" className="flex items-center gap-2">
    <img src={logo} alt="Logo" className="h-10 w-10 object-contain drop-shadow" />
    <span className="text-2xl font-bold tracking-wide">RecipeBook</span>
  </Link>

  <div className="flex gap-4 text-white font-medium">
    <Link to="/" className="hover:text-blue-800 transition-colors">Home</Link>
    <Link to="/add" className="hover:text-blue-800 transition-colors">Add Recipe</Link>
    <Link to="/favourites" className="hover:text-blue-800 transition-colors">Favourites</Link>
    <Link to="/about" className="hover:text-blue-800 transition-colors">About</Link>
  </div>
</nav>

  )
}
export default Navbar;