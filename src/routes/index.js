import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from '../components/pages/About';
import AddBlogs from '../components/pages/AddBlogs';
import Error from '../components/pages/Error';
import Home from '../components/pages/Home';
import NavBar from '../layout/NavBar';
import Protected from './Protected';

const Index = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const handleClick = () => {
        setIsLoggedIn(!isLoggedIn);
    }
    const button = isLoggedIn ? <button onClick={handleClick}>Log Out</button> : <button onClick={handleClick}>Log In</button> ;

  return (
    <BrowserRouter>
    <NavBar/>
    {button}
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />}/>
            <Route path='/add-blog' 
                element={
                    <Protected isLoggedIn={isLoggedIn}>
                        <AddBlogs/>
                    </Protected>
                }
            />
            <Route path='/*' element={<Error />}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Index;