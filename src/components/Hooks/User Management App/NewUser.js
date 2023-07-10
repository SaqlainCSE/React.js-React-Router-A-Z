import React, { useContext, useState } from 'react';
import { UsersContext } from './UsersContext';

const NewUser = () => {

    const {users, setUsers} = useContext(UsersContext);

    const [newUser, setNewUser] = useState('');

    const handleChange = (e) => {
        setNewUser(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const addUser = {id: new Date().getMilliseconds().toString(), username: newUser}
        setUsers([...users, addUser]);
        setNewUser("");
    };

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>Name: </label>
            <input type='text' id='username' name='username' onChange={handleChange} value={newUser}></input>
            <button type='submit'>Add</button>
        </form>
    </div>
  )
}

export default NewUser