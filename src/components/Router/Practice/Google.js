import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Google = () => {
  const goToHomePage = useNavigate();

  return (
    <div>
        <h1><h1>This is Google Page</h1></h1>
        <Button onClick={ () => goToHomePage('/') }>Go To Home Page</Button>
    </div>
  )
}

export default Google