import React from 'react';
import useFetch from './useFetch';

export default function DataFetch() {

    const {data, isLoading, error} = useFetch("https://jsonplaceholder.typicode.com/users");

    const loadingMessage = <h5>Data is loading...</h5>;
    const errorMessage = <h5>{error}</h5>

    const usersData = data && data.map((user) => {
        return <div key={user.id}>
            <h4>{user.name}</h4>
            <p>{user.username}</p>
            <p>{user.email}</p>
            <p>{user.address.zipcode}</p>
            <p>{user.company.name}</p>
        </div>
    });

  return (
    <div>
        <h1>Data Fetching</h1>
        {error && errorMessage}
        {isLoading && loadingMessage}
        {usersData}
    </div>
  )
}
