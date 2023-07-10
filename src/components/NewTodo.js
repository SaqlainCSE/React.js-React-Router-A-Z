import React, { useState } from 'react';

import style from './modules/newTodo.module.css';

export default function NewTodo(props) {

    const [team, setTeam] = useState({title: "", country: ""});
    const {title, country} = team;

    const handleTeam = (e) => {
        setTeam({...team, [e.target.name] : e.target.value});
    }

    const handleTeamSubmit = (e) => {
        e.preventDefault();
        props.onTeams(team);
        console.log("Submitted");
        setTeam({title: "", country: ""});
    }

  return (
    <div>
        <form className={style.form} onSubmit={handleTeamSubmit}>
            <div className={style["form-field"]}>
                <label>Title: </label>
                <input type='text' id='title' name='title' onChange={handleTeam} value={title}></input>
            </div>
            <div className={style["form-field"]}>
                <label>Country: </label>
                <input type='text' id='country' name='country' onChange={handleTeam} value={country}></input>                
            </div>

            <button type='submit'>Add Team</button>
        </form>
    </div>
  )
}
