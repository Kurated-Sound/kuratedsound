import React from 'react';
import './QuoteCard.css';
import { Container, Card } from 'react-bootstrap';

const QuoteCard = () => (

 <Container className='full-container'>
  <Card>
    <Card.Body>
      <blockquote className="blockquote mb-0">
        <p>{' '}
         We use modern-day tech and equipment that is suited to your needs and expectations. Our equipments primarily consists of PA speakers, subwoofers, both wired and wireless microphones, mixers to help amplify and control the sound, and a DJ controller for that overall music experience.
         {' '}</p>
      </blockquote>
    </Card.Body>
  </Card>
 </Container>
);

export default QuoteCard;