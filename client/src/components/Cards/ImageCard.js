import React from 'react';
import './ImageCard.css';
import { Container, Row, Col, Button } from 'react-bootstrap';

const ImageCard = () => (
  <Container>
    {/* 1,2,3 services cards */}
    <Container className='my-5'>
          <Row>
            <Col className='img-1'></Col>
            <Col>
              <Col>
                <h4>Sound Equipment Setup</h4></Col>
              <Col>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec enim eget purus luctus efficitur non sed tortor. <strong>Sound equipment setup</strong> non.</p>
              </Col>
              <Button>Learn More</Button>
            </Col>
          </Row>
        </Container>
        <Container className='my-5'>
          <Row>
            <Col>
              <Col>
                <h4>Private DJ</h4></Col>
              <Col>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec enim eget purus luctus efficitur non sed tortor. <strong>Sound equipment setup</strong> non.</p>
              </Col>
              <Button>Learn More</Button>
            </Col>
            <Col className='img-2'></Col>
          </Row>
        </Container>
        <Container className='my-5'>
          <Row>
            <Col className='img-3'></Col>
            <Col>
              <Col>
                <h4>Brand Strategy</h4></Col>
              <Col>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec enim eget purus luctus efficitur non sed tortor. <strong>Sound equipment setup</strong> non.</p>
              </Col>
              <Button>Learn More</Button>
            </Col>
          </Row>
        </Container>
  </Container>
);

export default ImageCard;