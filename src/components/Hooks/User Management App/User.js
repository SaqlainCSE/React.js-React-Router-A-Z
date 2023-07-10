import React, { useContext } from 'react';
import { UsersContext } from './UsersContext';

const User = ({user}) => {

  const {users, setUsers} = useContext(UsersContext);

    const {id, username} = user;

    const handleDelete = () => {
      setUsers(users.filter((user) => user.id !== id));
    }
  return (
    <section>
        <h3>{id}</h3>
        <h3>{username}</h3>
        <button type='submit' onClick={handleDelete}>Delete</button>
    </section>
  )
}

export default User