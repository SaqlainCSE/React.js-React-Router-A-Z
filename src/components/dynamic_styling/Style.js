import React, { useEffect, useState } from 'react';

const Style = () => {
  const [name, setName] = useState('');
  const [validInput, setValidInput] = useState(false);

  useEffect(() => {
      if(name.length < 2){
        setValidInput(false);
      }else{
        setValidInput(true);
      }
  },[name]);

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div>
        <input type='text' id='name' name='name' value={name} onChange={handleChange} style={{ backgroundColor: validInput ? 'green' : 'red' }}/>
    </div>
  )
}

export default Style