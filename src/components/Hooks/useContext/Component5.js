import React, { useContext } from 'react';
import { UserContext } from './UserContext';

const Component5 = () => {

    const {user, text} = useContext(UserContext);
  return (
    <div>
        <h2>{text}</h2>
        <h3>Id: {user.id}</h3>
        <h3>Name: {user.name}</h3>
    </div>
  )
}

export default Component5