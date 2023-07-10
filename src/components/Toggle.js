import React, { useState } from 'react';

export default function Toggle() {

    const [toggle, setToggle] = useState(true);

    const handleToggleShow = () => {
        setToggle(toggle ? false : true);
    }

  return (
    <div style={{ padding: "1rem", textAlign: 'center', margin: '1rem', backgroundColor: 'pink' }}>
        {toggle && 
        <p>
            Dolor accusam rebum erat magna consetetur, lorem takimata et et sit eirmod. Accusam kasd no lorem takimata rebum et, gubergren.
        </p>
        }
        <div style={{ textAlign: 'center' }}>
            <button style={{ padding: '1rem' }} onClick={handleToggleShow}>{toggle ? "Hide" : "Show"}</button>
        </div>
    </div>
  )
}
