import React from 'react';

import style from '../modules/todo.module.css';

export default function Movie(props) {
    const {name, desc} = props.movie;
    const {id} = props;

    const deleteMovie = () => {
      props.onDelete(id);
    };

  return (
    <article className={style.todo}>
        <div>
          <h2>Movie Name: {name}</h2>
          <h3>Description: {desc}</h3>
        </div>
        <div>
          <button className={style.btn} type='submit' onClick={deleteMovie}>Delete</button>
        </div>
    </article>
  )
}
