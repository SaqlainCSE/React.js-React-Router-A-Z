import React, { useEffect, useState } from 'react';

const Search = (props) => {

    const [search, setSearch] = useState('');

    const handleSearch = (e) => {
        setSearch(e.target.value);
    }

    useEffect(() => {
        props.onSearch(search);
    }, [search]);
    
  return (
    <div style={{ textAlign: 'center' }}>
        <input type='text' placeholder='Search Country' id='search' name='search' value={search} onChange={handleSearch}/>
    </div>
  )
}

export default Search