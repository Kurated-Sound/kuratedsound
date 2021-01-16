import React from 'react';
import './BlankTextCard.css';
import { Container } from 'react-bootstrap';

const BlankTextCard = () => (

  <Container className='d-flex justify-content-center color-1'>
    <h3 className='header-quote-1 text-center'>
      {`Kurated Sound brings to you modern-day electronic music with prestine and quality sound by using some of the best sound equipment brands in today's industry. 
      These brands implement the latest technologies and tools to acquire what is necessary to amplify and produce the best sounding tunes to your ears.`}
    </h3>
  </Container>
);

export default BlankTextCard;