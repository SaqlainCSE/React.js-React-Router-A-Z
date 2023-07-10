import React, { useRef } from 'react';

const UserForm = () => {

    const userNameRef = useRef();
    const passwordRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        const username = userNameRef.current.value;
        const password = passwordRef.current.value;
        userNameRef.current.style.color = 'red';
        console.log({username, password});
    };

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>Username: </label>
            <input type='text' id='username' name='username' ref={userNameRef}></input><br/>
            <label>Password: </label>
            <input type='password' id='password' name='password' ref={passwordRef}></input><br/>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default UserForm