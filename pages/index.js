import React from 'react';

import { Container } from '@mui/material';

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import More from '../components/More';
import Press from '../components/Press';
import Partners from '../components/Partners';
import Map from '../components/Map';
import Network from '../components/Network';
import Title from '../components/Title';

import background from '../public/images/background.png';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  homebackground: {
    width: '100%',
    height: '100vh',
    backgroundImage: `url(${background.src})`,
    position: 'fixed',
    left: 0,
    backgroundSize: '180px',
    top: 0,
    bottom: 0,
    backgroundPosition: 'top center',
    zIndex: '-1',
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <Container>
      <div className={classes.homebackground}></div>
      <Navbar />
      <Hero />
      <More />
      <Press />
      <Partners />
      <Map />
      <Network />
      <Title title="Live Network Stats" />
    </Container>
  );
}
