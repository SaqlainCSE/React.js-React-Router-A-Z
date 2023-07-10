import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Countries from './Countries';
import Search from './Search';

const url = "https://restcountries.com/v3.1/all";

const CountryApp = () => {

  const [data, setData] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState(data);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const isLoadingMessage = <h5>"Data is loading..."</h5>
  const errorMessage = <h5>Data not found!!!</h5>

  useEffect(() => {
    axios(url)
    .then((res) => {
      setData(res.data);
      setFilteredCountries(res.data);
      setIsLoading(false);
    })
    .catch((error) => {
      setIsLoading(false); 
      setError(error.message);
    });
  },[]);


  //delete country..............
  const onRemoveCountry = (name) => {
    setFilteredCountries(filteredCountries.filter((data) => data.name.common !== name));
  }

  //search country..............
  const onSearchCountry = (searchValues) => {
    let value = searchValues.toLowerCase();
    setFilteredCountries(data.filter((data) => data.name.common.toLowerCase().startsWith(value)));
  };

  return (
    <>
      <h1>Country App</h1>
      <Search onSearch={onSearchCountry}/>
      {isLoading && isLoadingMessage}
      {error && errorMessage}
      {data && <Countries countries={filteredCountries} onRemoveCountry={onRemoveCountry}/>}
    </>
  )
}

export default CountryApp