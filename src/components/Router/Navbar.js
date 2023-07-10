import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
            <div className="topnav">
                <Nav.Link>
                    <Link to="/" className='active'>Home</Link>
                </Nav.Link>
                <Nav.Link>
                    <Link to="/blogs" className='active'>Blogs</Link>
                </Nav.Link>
                <Nav.Link>
                    <Link to="/contact" className='active'>Contact</Link>
                </Nav.Link>
            </div>
  )
}

export default Navbar