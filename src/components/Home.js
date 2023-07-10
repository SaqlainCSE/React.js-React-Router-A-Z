import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import NewTodo from './NewTodo';
import Todos from './Todos';

import style from './modules/home.module.css';

export default function Home() {
    
    const [teams, setTeams] = useState([]);

    const handleTeams = (teamsData) => {
        setTeams([...teams, {id:uuidv4(),teamsData}]);
        console.log(teams);
    }

    const teamDelete = (id) => {
      setTeams(teams.filter((team) => team.id !== id));
      console.log(teams);
    }
    
  return (
    <div className={style.container}>
      <h1 style={{ color: 'white' }}>Todo App</h1>
        <NewTodo onTeams={handleTeams}/>
        <Todos teams={teams} onDelete={teamDelete}/>
    </div>
  )
}
