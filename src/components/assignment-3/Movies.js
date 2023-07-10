import React from 'react';
import Style from '../modules/todos.module.css';
import Movie from './Movie';

export default function Movies(props) {
  return (
    <div className={Style.todos}>
        {props.movies.map((movie) => <Movie key={movie.id} id={movie.id} movie={movie.newMovie} onDelete={props.onDelete}/>)}
    </div>
  )
}
