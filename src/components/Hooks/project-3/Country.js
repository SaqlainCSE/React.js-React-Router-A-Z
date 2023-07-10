import React from 'react';
import style from './modules/country.module.css';

const Country = (props) => {

    const {name, flags, capital, population, area} = props.country;

    const handleDeleteCountry = () => {
      props.onRemoveCountry(name.common);
    }

  return (
    <article className={style.country}>
        <div>
            <img src={flags.png} alt={name.common} className={style.flag}/>
            <h3>Name: {name.common}</h3>
            <h3>Population: {population}</h3>
            <h3>Capital: {capital}</h3>
            <h3>Area: {area}</h3>
            <button className={style.btn} onClick={handleDeleteCountry}>Delete</button>
        </div>
    </article>
  )
}

export default Country