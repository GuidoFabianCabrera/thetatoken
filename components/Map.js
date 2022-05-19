import React from 'react';

import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';

import map from '../public/images/map.png';
import dotStrip from '../public/images/dot_strip.png';
import dotGreen from '../public/images/dot_green_1.png';
import dotYellow from '../public/images/dot_yellow_1.png';
import dotRed from '../public/images/dot_red_1.png';

const useStyles = makeStyles((theme) => ({
  map: {
    '& > div:nth-child(2) div::before': {
      background: `url(${dotYellow.src})`,
      backgroundSize: '21px 21px',
    },
    '& > div:nth-child(4) div::before': {
      background: `url(${dotRed.src})`,
      backgroundSize: '21px 21px',
    },
  },
  mapTitle: {
    textTransform: 'uppercase',
    fontSize: '40px',
    position: 'relative',
    display: 'block',
    [theme.breakpoints.up('md')]: {
      fontSize: '50px',
    },
    '&::after': {
      // content: '"Live Network Stats"',
      content: '"LIVE NETWORK STATS"',
      position: 'absolute',
      left: '5px',
      top: '5px',
      zIndex: -1,
      opacity: 0.5,
      background: `url(${dotStrip.src})`,
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      color: 'transparent',
    },
  },
  mapItem: {
    fontSize: '18px',
    '&::before': {
      content: '""',
      width: '21px',
      height: '21px',
      background: `url(${dotGreen.src})`,
      backgroundSize: '21px 21px',
      display: 'inline-block',
      marginRight: '6px',
      verticalAlign: 'text-top',
    },
  },
  mapImage: {
    width: '100%',
    height: '485px',
    objectFit: 'cover',
    [theme.breakpoints.up('md')]: {
      width: '100%',
      height: 'auto',
    },
  },
}));

export default function Map() {
  const classes = useStyles();

  return (
    <Grid container paddingY={2} spacing={1} className={classes.map}>
      <Grid item xs={12} marginBottom={3}>
        <strong className={classes.mapTitle}>Live Network Stats</strong>
      </Grid>
      <Grid item>
        <div className={classes.mapItem}>Edge Node (125996)</div>
      </Grid>
      <Grid item>
        <div className={classes.mapItem}>Guardian Node (3471)</div>
      </Grid>
      <Grid item>
        <div className={classes.mapItem}>Validator Node (23)</div>
      </Grid>
      <Grid item xs={12} marginY={1}>
        <img src={map.src} className={classes.mapImage} />
      </Grid>
    </Grid>
  );
}
