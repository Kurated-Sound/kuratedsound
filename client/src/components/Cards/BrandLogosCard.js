import React from 'react'
import './BrandLogosCard.css';
import { Container, Row, Col, Card } from 'react-bootstrap';

const BrandLogosCard = () => (

 <Container className='full-container my-5'>
   <Row>
     <Col>
       <Card style={{ width: '10rem' }}>
         <Card.Body>
           <i class="fab fa-twitch fa-fw"></i>
           <Card.Text>Pioneer</Card.Text>
           <Card.Subtitle className="mb-2 text-muted">text</Card.Subtitle>
         </Card.Body>
       </Card>
     </Col>
     <Col>
       <Card style={{ width: '10rem' }}>
         <Card.Body>
           <i class="fab fa-twitch fa-fw"></i>
           <Card.Text>QSC</Card.Text>
           <Card.Subtitle className="mb-2 text-muted">text</Card.Subtitle>
         </Card.Body>
       </Card>
     </Col>
     <Col>
       <Card style={{ width: '10rem' }}>
         <Card.Body>
           <i class="fab fa-twitch fa-fw"></i>
           <Card.Text>Turbosound</Card.Text>
           <Card.Subtitle className="mb-2 text-muted">text</Card.Subtitle>
         </Card.Body>
       </Card>
     </Col>
     <Col>
       <Card style={{ width: '10rem' }}>
         <Card.Body>
           <i class="fab fa-twitch fa-fw"></i>
           <Card.Text>Mackie</Card.Text>
           <Card.Subtitle className="mb-2 text-muted">text</Card.Subtitle>
         </Card.Body>
       </Card>
     </Col>
     <Col>
       <Card style={{ width: '10rem' }}>
         <Card.Body>
           <i class="fab fa-twitch fa-fw"></i>
           <Card.Text>Shure</Card.Text>
           <Card.Subtitle className="mb-2 text-muted">text</Card.Subtitle>
         </Card.Body>
       </Card>
     </Col>
     <Col>
       <Card style={{ width: '10rem' }}>
         <Card.Body>
           <i class="fab fa-twitch fa-fw"></i>
           <Card.Text>Sennheiser</Card.Text>
           <Card.Subtitle className="mb-2 text-muted">text</Card.Subtitle>
         </Card.Body>
       </Card>
     </Col>
   </Row>
 </Container>
);

export default BrandLogosCard;