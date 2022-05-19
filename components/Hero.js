import React from 'react';

import { Grid } from '@mui/material';

import largueNetwork from '../public/images/large-with-network.png';
import { makeStyles } from '@mui/styles';

import imageVideo from '../public/images/video.webp';

const useStyles = makeStyles((theme) => ({
  heroImage: {
    maxWidth: '330px',
    [theme.breakpoints.up('md')]: {
      maxWidth: '368px',
    },
  },
  heroTitle: {
    fontSize: '22px',
    fontWeight: '100',
    lineHeight: '28px',
  },
  heroVideo: {
    width: '100%',
    maxWidth: '300px',
  },
}));

export default function Hero() {
  const classes = useStyles();

  return (
    <Grid container paddingY={4} justifyContent="space-between">
      <Grid item xs={11} sm={6} md={5}>
        <img
          className={classes.heroImage}
          src={largueNetwork.src}
          width="100%"
        />
        <p className={classes.heroTitle}>
          Next generation video and entertainment blockchain powered by you.
        </p>
      </Grid>
      <Grid item md={3} sx={{ display: { xs: 'none', md: 'block' } }}>
        <p>Watch What We're Doing</p>
        <img className={classes.heroVideo} src={imageVideo.src} />
      </Grid>
    </Grid>
  );
}
