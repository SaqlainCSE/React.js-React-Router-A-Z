import React from 'react';

import Todo from './Todo';
import style from './modules/todos.module.css';

export default function Todos(props) {
    
  return (
    <section className={style.todos}>
        {props.teams.map((team) => <Todo key={team.id} id={team.id} team={team.teamsData} teamDelete={props.onDelete}/> )}
    </section>
  )
}
