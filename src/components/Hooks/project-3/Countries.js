import React from 'react';
import uuid from 'react-uuid';
import Country from './Country';
import style from './modules/countries.module.css';

const Countries = (props) => {

  return (
    <section className={style.countries}>
        {props.countries.map((country) => {
            const newCountry = {country, id: uuid()}

            return <Country {...newCountry} key={newCountry.id} onRemoveCountry={props.onRemoveCountry}/>
        })}
    </section>
  )
}

export default Countries