import React from 'react';

import { Grid } from '@mui/material';

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  more: {},
  moreTitle: {
    fontSize: '30px',
    letterSpacing: '-0.68px',
    textTransform: 'uppercase',
    margin: '20px 0',
    [theme.breakpoints.up('sm')]: {
      margin: '10px 0',
      fontSize: '42px',
    },
  },
  moreDescription: {
    fontSize: '16px',
    [theme.breakpoints.up('sm')]: {
      fontSize: '24px',
    },
  },
  moreSubtitle: {
    margin: '10px 0',
  },
  moreButton: {
    textTransform: 'uppercase',
    background: 'linear-gradient(to right, #29b3eb 0%, #21edba 100%)',
    padding: '5px',
    color: '#1b1f2a',
    padding: '6px 16px',
    fontSize: '15px',
    width: '130px',
    margin: '0 auto',
    display: 'block',
    cursor: 'pointer',
    [theme.breakpoints.up('sm')]: {
      width: '100%',
      fontSize: '20px',
    },
    '&:hover': {
      opacity: '1',
      boxShadow: '0 0 25px rgb(33 237 186 / 50%)',
    },
  },
}));

export default function More() {
  const classes = useStyles();

  return (
    <Grid container paddingY={4} justifyContent="center" textAlign="center">
      <Grid item xs={12} className={classes.moreTitle}>
        <strong>Theta Mainnet 4.0</strong>
      </Grid>
      <Grid item xs={11} className={classes.moreDescription}>
        <strong>Introducing Theta Metachain to Power Web3 Businesses</strong>
      </Grid>
      <Grid item xs={12} className={classes.moreSubtitle}>
        <small>Read the Mainnet 4.0 Whitepaper</small>
      </Grid>
      <Grid item xs={12} sm={4}>
        <strong className={classes.moreButton}>Learn More</strong>
      </Grid>
    </Grid>
  );
}
