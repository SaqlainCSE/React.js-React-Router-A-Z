import React, { useState } from 'react';

export default function FAQ({id, title, desc}) {

    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(!toggle);
    }

  return (
    <article>
        <div style={{ padding: "1rem", textAlign: 'center', margin: '1rem', backgroundColor: 'lightgreen' }}>
            <h4>{title}</h4>
            <button type='submit' onClick={handleToggle}>{toggle ? "-" : "+"}</button>
            {toggle && <p>{desc}</p>}
        </div>
    </article>
    
  )
}
