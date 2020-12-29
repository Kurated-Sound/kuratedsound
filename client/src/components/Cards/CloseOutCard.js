import React from 'react';
import './CloseOutCard.css';
import { Container, Jumbotron, Button } from 'react-bootstrap';

const CloseOutCard = () => {
  return (
  <Jumbotron className='quote-image'>
    <div className='header-quote'>
      <h1>
        {`
          However you tell your story, the right sound equipment can make all the difference.
          Allow us to bring more life and feel to your event by introducing the best in electronic music today.
        `}
      </h1>
      <Button className='my-2'>Find out</Button>
    </div>
  </Jumbotron>
  )
};

export default CloseOutCard;