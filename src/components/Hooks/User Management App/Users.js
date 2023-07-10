import React, { useState } from 'react';
import NewUser from './NewUser';
import User from './User';
import { UsersContext } from './UsersContext';

const dummyUsers = [{id: 101, username: "Saqlain"}, {id: 102, username: "Mustak"}];

const Users = () => {

    const [users, setUsers] = useState(dummyUsers);

  return (
    <UsersContext.Provider value={{ users, setUsers }}>
        <div>
            <NewUser />
            {users.map((user) => {
                return <User key={user.id} user={user}/>
            })}
        </div>
    </UsersContext.Provider>
        
  )
}

export default Users