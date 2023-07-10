import React from 'react';
import useFetch from './useFetch';

const TodoDataFetch = () => {

    const {data, isLoading, error} = useFetch("https://jsonplaceholder.typicode.com/todos");

    const todosData = data && data.map((todo) => {
        return <div key={todo.id}>
            <p>{todo.title}</p>

        </div>
    });

    const errorMessage = <h5>Todos Not Found</h5>

  return (
    <div>
        <h1>Todos Data Fetching</h1>
        {todosData}
        {isLoading}
        {error && errorMessage}
    </div>
  )
}

export default TodoDataFetch;