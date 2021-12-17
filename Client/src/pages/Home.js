
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import HomeSlide from '../components/home/HomeSlide';
import { FooterW } from '../components/Layouts/FooterW';

const StyleBoxHome = styled(Box)({
  // padding: '20px 200px',
  maxWidth: '900px',
  margin: '0 auto',
  backgroundColor: 'white',
  height: '65vh',
  justifyContent: 'space-around',
  flexWrap: 'wrap',
  alignContent: 'flex-start',
  flexDirection: 'colurmn',
  position: 'relative',
  zIndex: '100'
});


const Home = () => {
  return (
    <>
      <StyleBoxHome >
        <HomeSlide />
      </StyleBoxHome>
      <FooterW />
    </>
  )
};

export default Home;
