import React from 'react';
import './Jumbo.css';
import Jumbotron from 'react-bootstrap/Jumbotron';

const Jumbo = () => {
  return (
    <Jumbotron className='jumbo-img'>
        <div>
          <h1 className='header-1'>{`              
            Bringing to you an extraordinary sound experience
            for all events and occasions.
          `}</h1>
        </div>
    </Jumbotron>
  )
};

export default Jumbo;