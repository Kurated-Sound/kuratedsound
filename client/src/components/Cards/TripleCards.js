import React from 'react'
import './TripleCards.css';
import { Container, Row, Col, Card } from 'react-bootstrap';

const TripleCards = () => (

 <Container className='center-block my-5'>
   <Row>
     <Col>
       <Card className='card-fix'>
         <Card.Body>
           <i class="fab fa-twitch fa-fw"></i>
           <Card.Title>Service 1</Card.Title>
           <Card.Text>
             We create unique experiences that cater to your wants and needs by turning your occasion to an overall phenomenon based on the criteria.
           </Card.Text>
         </Card.Body>
       </Card>
     </Col>
     <Col>
       <Card className='card-fix'>
         <Card.Body>
           <i class="fab fa-twitch fa-fw"></i>
           <Card.Title>Service 2</Card.Title>
           <Card.Text>
             Listen to the music through our high-grade equipment, let the DJ boost your vibes, and dance to your heart's content.
           </Card.Text>
         </Card.Body>
       </Card>
     </Col>
     <Col>
       <Card className='card-fix'>
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