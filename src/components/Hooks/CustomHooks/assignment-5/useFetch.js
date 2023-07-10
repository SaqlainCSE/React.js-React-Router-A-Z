import { useEffect, useState } from 'react';

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState("Data is loading...");
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url)
        .then((res) => {
            if(!res.ok)
            {
                throw Error("Data not found!");
            }
            return res.json();
        })
        .then((data) => {
            setData(data);
            setIsLoading(false);
        })
        .catch((error) => {
            setError(error.message);
            setIsLoading(false);
        })
    }, [url]);

    return {data, isLoading, error};
  
}

export default useFetch;