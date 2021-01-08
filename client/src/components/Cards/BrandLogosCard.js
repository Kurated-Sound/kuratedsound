import React from 'react'
import './BrandLogosCard.css';
import { Container, Row } from 'react-bootstrap';

const BrandLogosCard = () => (

 <Container className='brand-logo-container d-flex justify-content-center'>
   <Row className='d-flex justify-content-center'>
     <div className='crop'>
      <img src='/images/behringer.png' alt=''/>
     </div>
     <div className='crop'>
      <img src='/images/mackie.png' alt=''/>
     </div>
     <div className='crop'>
      <img src='/images/shure.png' alt=''/>
     </div>
   </Row>
   <Row className='d-flex justify-content-center'>
     <div className='crop'>
      <img src='/images/pioneerdj.png' alt=''/>
     </div>
     <div className='crop'>
      <img src='/images/sennheiser.png' alt=''/>
     </div>
     <div className='crop'>
      <img src='/images/turbosound.png' alt=''/>
     </div>
   </Row>
 </Container>
);

export default BrandLogosCard;