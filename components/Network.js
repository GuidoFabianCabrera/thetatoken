import React from 'react';

import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';

import map from '../public/images/map.png';

const useStyles = makeStyles((theme) => ({
  network: {
    textAlign: 'center',
  },
  networkTitle: {
    fontSize: '30px',
    letterSpacing: '-0.68px',
    textTransform: 'uppercase',
    margin: '20px 0',
    [theme.breakpoints.up('sm')]: {
      margin: '10px 0',
      fontSize: '42px',
    },
  },
  networkSubtitle: {
    fontSize: '22px',
    fontWeight: '100',
    lineHeight: '28px',
  },
  test: {
    border: '1px solid red',
  },
}));

export default function Map() {
  const classes = useStyles();

  return (
    <Grid container paddingY={2} className={classes.network}>
      <Grid item xs={12}>
        <strong className={classes.networkTitle}>JOIN THE NETWORK</strong>
      </Grid>
      <Grid item xs={12}>
        <div className={classes.networkSubtitle}>
          Download the latest tools to participate in the Theta Network.
        </div>
      </Grid>
      <Grid item xs={12}>
        <div className={classes.test}>
          Download the latest tools to participate in the Theta Network.
        </div>
      </Grid>
    </Grid>
  );
}
