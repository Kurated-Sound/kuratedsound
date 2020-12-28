import React from 'react';
import './Home.css';
import { Container, Row, Col, Card } from 'react-bootstrap';
import ImageCard from '../Cards/ImageCard.js';
import TripleCards from '../Cards/TripleCards.js';
import QuoteCard from '../Cards/QuoteCard.js';
import BrandLogosCard from '../Cards/BrandLogosCard';

const Home = () => (
  
  <Container className='full-container'>
    <TripleCards />
    <ImageCard />
    <QuoteCard />
    <BrandLogosCard />
  </Container>
);

export default Home;