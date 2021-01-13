import React from 'react';
import './Home.css';
import { Container, Jumbotron } from 'react-bootstrap';
import ImageCard from '../Cards/ImageCard.js';
import TripleCards from '../Cards/TripleCards.js';
import CloseOutCard from '../Cards/CloseOutCard.js';
import BrandLogosCard from '../Cards/BrandLogosCard';
import BlankTextCard from '../Cards/BlankTextCard';
import Jumbo from './Jumbo';

const Home = () => (
  <Container className='full-container'>
    <Jumbo />
    <BlankTextCard />
    <hr />
    <BrandLogosCard />
    <hr />
    <ImageCard />
    <CloseOutCard />
  </Container>
);

export default Home;