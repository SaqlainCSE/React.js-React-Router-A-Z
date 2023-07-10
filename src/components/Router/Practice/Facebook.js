import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Facebook = () => {

  const goToHomePage = useNavigate();

  return (
    <div>
        <h1>This is Facebook Page</h1>
        <Button onClick={ () => {goToHomePage('/')} }>Go To Home Page</Button>
    </div>
  )
}

export default Facebook