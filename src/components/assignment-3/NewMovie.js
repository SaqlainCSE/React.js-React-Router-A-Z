import React, { useState } from 'react';
import Style from '../modules/newTodo.module.css';

export default function NewMovie(props) {

    const [movie, setMovie] = useState({name: '', desc: ''});
    const {name, desc} = movie;
    
    const handleMovie = (e) => {
        setMovie({...movie, [e.target.name] : e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onMovie(movie);
        setMovie({name: '', desc: ''});
    }

  return (
    <div>
        <form className={Style.form} onSubmit={handleSubmit}> 
            <div className={Style["form-field"]}>
                <label>Movie Name: </label>
                <input type='text' id='name' name='name' required value={name} onChange={handleMovie}></input>
            </div><br/>
            <div className={Style["form-field"]}>
                <label>Description: </label>
                <textarea type='text' id='desc' name='desc' required value={desc} onChange={handleMovie}></textarea>
            </div><br/>
            <button type='submit'>Save</button>
        </form><br/>
    </div>
  )
}
