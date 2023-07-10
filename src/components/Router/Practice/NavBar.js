import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="topnav">

      <Nav.Link>
        <Link to='/'>Home</Link><br/>
      </Nav.Link>

      <Nav.Link>
        <Link to='/facebook'>Facebook</Link><br/>        
      </Nav.Link>

      <Nav.Link>
        <Link to='/google'>Google</Link><br/>
      </Nav.Link>

      <Nav.Link>
        <Link to='/instagram'>Instagram</Link><br/>
      </Nav.Link>
      
    </div>
  )
}

export default NavBar