import React from 'react';
import './Home.css';
import Container  from '@material-ui/core/Container';
import ImageCard from '../Cards/ImageCard.js';
import CloseOutCard from '../Cards/CloseOutCard.js';
import BrandLogosCard from '../Cards/BrandLogosCard';
import BlankTextCard from '../Cards/BlankTextCard';
// import TripleCards from '../Cards/TripleCards';
import Jumbo from './Jumbo';

const Home = () => (
  <Container className='full-container'>
    <Jumbo />
    {/* <TripleCards /> */}
    <ImageCard />
    <CloseOutCard />
  </Container>
);

export default Home;