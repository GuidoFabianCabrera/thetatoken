import React from 'react';

import { Container, Grid, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';

import Drawner from '../components/Drawner';

import english from '../public/images/english.png';
import southCorea from '../public/images/south-korea.png';
import discord from '../public/images/discord.png';
import fb from '../public/images/fb.png';
import twitter from '../public/images/twitter.png';
import medium from '../public/images/medium.png';
import github from '../public/images/github.png';

const useStyles = makeStyles((theme) => ({
  navItems: {
    textTransform: 'uppercase',
    fontWeight: '100',
    fontSize: '13px',
    [theme.breakpoints.up('md')]: {
      fontSize: '15px',
    },
  },
  navLanguage: {
    textAlign: 'end',
  },
  navLanguageLogo: {
    width: '18px',
    display: 'inline-block',
    '&:nth-child(2)': {
      marginLeft: '10px',
    },
  },
  navSocialIcons: {
    width: '24px',
    display: 'block',
    cursor: 'pointer',
  },
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <Grid container paddingY={2} alignItems="center">
      <Grid item xs={6} sm={1} md={2}>
        <Drawner />
      </Grid>
      <Grid
        item
        sm={10}
        md={9}
        lg={7}
        sx={{ display: { xs: 'none', sm: 'flex' } }}>
        <Grid container spacing={2}>
          {[
            'Network',
            'News',
            'Team',
            'Roadmap',
            'Docs',
            'Wallet',
            'Explorer',
          ].map((text, index) => (
            <Grid item key={index} className={classes.navItems}>
              {text}
            </Grid>
          ))}
        </Grid>
      </Grid>

      <Grid
        item
        xs={6}
        sm={1}
        sx={{ paddingRight: { md: 1 } }}
        className={classes.navLanguage}>
        <img src={english.src} className={classes.navLanguageLogo} />
        <img src={southCorea.src} className={classes.navLanguageLogo} />
      </Grid>
      <Grid
        item
        lg={2}
        className={classes.navLanguage}
        sx={{ display: { xs: 'none', lg: 'flex' } }}>
        <Grid container>
          {[discord, fb, twitter, medium, github].map((item, index) => (
            <Grid item key={index}>
              <img src={item.src} className={classes.navSocialIcons} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
