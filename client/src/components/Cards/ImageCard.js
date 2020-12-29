import React from 'react';
import './ImageCard.css';
import { Container, Row, Col, Button } from 'react-bootstrap';

const ImageCard = () => (
  <>
  <Container className='full-container my-5 '>
    <Row>
      <Col className='img-1 img-wrapper'></Col>
      <Col className='text-center text-description'>
        <h1 className='text-left text-title'>Sound Setup & Staging</h1>
        <p className='text-left'>
          We create unique experiences that cater to your wants and needs by turning your occasion to an overall phenomenon based on the criteria.
        </p>
      </Col>
    </Row>
  </Container>

  <Container className='full-container my-5'>
    <Row>
      <Col className='text-center text-description'>
      <h1 className='text-right text-title'>Exclusive DJ</h1>
      <p className='text-right'>
        Reserve an exclusive DJ who will curate a set to keep you dancing and vibing during the entire span your event.
      </p>
      </Col>
      <Col className='img-2 img-wrapper'></Col>
    </Row>
  </Container>

  <Container className='full-container my-5 '>
    <Row>
      <Col className='img-3 img-wrapper'></Col>
      <Col className='text-center text-description'>
        <h1 className='text-title text-left'>Brand Strategy & Marketing</h1>
        <p className='text-left'>
          If you are a DJ within the electronic/dance music realm, allow us to partner with you to <strong>develop and strengthen</strong> your brand as an artist.
        </p>
      </Col>
    </Row>
  </Container>
  </>
);

export default ImageCard;