import React, { useEffect, useState } from 'react';

export default function DataFetch() {

    const [users, setUsers] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");

    // useEffect(() => {
    //     fetch("https://jsonplaceholder.typicode.com/users")
    //     .then((res) => res.json())
    //     .then((data) => setUsers(data), setIsLoading(false))
    //     .catch((error) => setError(error.message));
    // },[]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
        if(!res.ok )
        {
            throw Error("Data Not Found!");
        }
            return res.json();
        })
        .then((data) => {
            setUsers(data); 
            setIsLoading(false);
        })
        .catch((error) => {
           setError(error.message);
           setIsLoading(false);
        });
    },[]);

  return (
    <div>
        <h1>Data Fetching</h1>
        {isLoading && <h5>Data is loading...</h5>}
            {users && users.map((user) => 
            <div key={user.id}>
                <h4>{user.name}</h4>
                <p>{user.username}</p>
                <p>{user.email}</p>
                <p>{user.address.zipcode}</p>
                <p>{user.company.name}</p>
            </div>
            )}
            <h5>{error}</h5>
        </div>
  )
}
