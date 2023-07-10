import React from 'react';
import { Navigate } from 'react-router-dom';

const Protected = ({isLoggedIn, children}) => {
    if(!isLoggedIn)
    {
        return <Navigate to='/' replace />;
    }
    else{
        return children;
    }
}

export default Protected;