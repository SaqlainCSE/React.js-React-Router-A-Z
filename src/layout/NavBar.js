import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="topnav">
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/add-blog'>Add Blog</Link>
    </nav>
  )
}

export default NavBar