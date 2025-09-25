import React from 'react'
import { Link} from 'react-router-dom'
import { useState } from 'react'
import {Menu, X } from 'lucide-react'
import "./Navbar.css"
import logo from "../assets/recipe-img.png"


const Navbar = () => {
   const [isOpen, setIsOpen] = useState(false);
  return (
     <nav className="flex items-center justify-between px-4 py-4 bg-blue-400 text-white shadow-md">
      {/* Logo */}
      <Link to="/" className="flex items-center gap-2">
        <img
          src={logo}
          alt="Logo"
          className="h-10 w-10 object-contain drop-shadow"
        />
        <span className="text-2xl font-bold tracking-wide">RecipeBook</span>
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-6 font-medium">
        <Link to="/" className="hover:text-blue-800 transition-colors">
          Home
        </Link>
        <Link to="/add" className="hover:text-blue-800 transition-colors">
          Add Recipe
        </Link>
        <Link to="/favourites" className="hover:text-blue-800 transition-colors">
          Favourites
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-blue-400 flex flex-col items-center gap-6 py-6 text-lg font-medium shadow-md md:hidden z-50">
          <Link
            to="/"
            className="hover:text-blue-100 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/add"
            className="hover:text-blue-100 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Add Recipe
          </Link>
          <Link
            to="/favourites"
            className="hover:text-blue-100 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Favourites
          </Link>
        </div>
      )}
    </nav>

  )
}
export default Navbar;