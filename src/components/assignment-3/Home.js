import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import style from '../modules/home.module.css';
import Movies from './Movies';
import NewMovie from './NewMovie';

// const dummyMovies = [{name: "3 Idiots", desc: "Release Year: 2009"}, {name: "Fanna", desc: "Release Year: 2008"}];

export default function Home() {

    const [movies, setMovies] = useState([]);

    const handleNewMovie = (newMovie) => {
        setMovies([...movies, {id: uuidv4() ,newMovie}]);
    }

    const deleteMovie = (id) => {
      setMovies(movies.filter((movie) => movie.id !== id));
    }
 
  return (
    <div className={style.contrainer}>
        <h1 style={{ color:'Blue' }}>Movie List App</h1>
        <section>
            <NewMovie onMovie={handleNewMovie}/>
            <Movies movies={movies} onDelete={deleteMovie}/>
        </section>
    </div>
  )
}
