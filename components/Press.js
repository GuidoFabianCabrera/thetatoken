import React from 'react';

import { Grid } from '@mui/material';

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  press: {
    textTransform: 'uppercase',
  },
  pressOffTitle: {
    fontSize: '18px',
    fontStyle: 'italic',
    opacity: '0.5',
  },
  pressTitle: {
    fontSize: '30px',
    fontStyle: 'italic',
    lineHeight: '37px',
    [theme.breakpoints.up('sm')]: {
      fontSize: '40px',
      lineHeight: '42px',
    },
  },
  pressButton: {
    color: '#21edba',
    fontSize: '15px',
    marginTop: '16px',
  },
}));

export default function More() {
  const classes = useStyles();

  return (
    <Grid
      container
      paddingY={4}
      className={classes.press}
      justifyContent="center"
      textAlign="center">
      <Grid item xs={12}>
        <strong className={classes.pressOffTitle}>Hot off the press</strong>
      </Grid>
      <Grid item xs={11} md={7}>
        <strong className={classes.pressTitle}>
          American Idol Launching First Ever Real-Time Predictive NFTs As Part
          Of Live Televised Broadcasts Celebrating The 20th Season
        </strong>
      </Grid>
      <Grid item xs={12} className={classes.pressButton}>
        <strong>Learn More</strong>
      </Grid>
    </Grid>
  );
}
