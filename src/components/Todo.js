import React from 'react';

import style from './modules/todo.module.css';

export default function Todo(props) {

    const {title, country} = props.team;
    const {id} = props;

    const deleteTeam = () => {
      props.teamDelete(id);
    }

  return (
    <article className={style.todo}>
        <div>
            <h3>Title: {title}</h3>
            <p>Country: {country}</p>
        </div>
        <div>
            <button className={style.btn} onClick={deleteTeam}><i className='fa fa-trash fa-2x'></i></button>
        </div>
    </article>
  )
}
