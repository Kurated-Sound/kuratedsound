import React from 'react'
import './TripleCards.css';
import { Container, Row, Col, Card } from 'react-bootstrap';

const TripleCards = () => (

 <Container className='full-container my-5'>
   <Row>
     <Col>
       <Card style={{ width: '20rem' }}>
         <Card.Body>
           <i class="fab fa-twitch fa-fw"></i>
           <Card.Title>Service 1</Card.Title>
           <Card.Text>
             We create unique experiences that cater to your wants and needs to turn your ocassion to an overall phenomenon.
           </Card.Text>
         </Card.Body>
       </Card>
     </Col>
     <Col>
       <Card style={{ width: '20rem' }}>
         <Card.Body>
           <i class="fab fa-twitch fa-fw"></i>
           <Card.Title>Service 2</Card.Title>
           <Card.Text>
             Feel the music and turn your social gatherings into more than just the typical meet-up occasion.
           </Card.Text>
         </Card.Body>
       </Card>
     </Col>
     <Col>
       <Card style={{ width: '20rem' }}>
         <Card.Body>
           <i class="fab fa-twitch fa-fw"></i>
           <Card.Title>Service 3</Card.Title>
           <Card.Text>
             We are not your ordinary bluetooth speaker or sound bar playing through your phone.
           </Card.Text>
         </Card.Body>
       </Card>
     </Col>
   </Row>
 </Container>
);

export default TripleCards;