import React from 'react';

import { Grid } from '@mui/material';

import { makeStyles } from '@mui/styles';

import image from '../public/images/thumb_thetatv.png';
import logo from '../public/images/logo_thetatv.png';
import steveChen from '../public/images/steve_chen.png';
import yt from '../public/images/youtube.png';
import discord from '../public/images/discord.png';
import fb from '../public/images/fb.png';
import twitter from '../public/images/twitter.png';
import medium from '../public/images/medium.png';
import github from '../public/images/github.png';

const useStyles = makeStyles((theme) => ({
  partners: {
    // textTransform: 'uppercase',
  },
  partnersLive: {
    display: 'inline-block',
    background: '#e82768',
    padding: '2px 10px',
    borderRadius: '20px',
    fontSize: '10px',
    textTransform: 'uppercase',
    verticalAlign: 'super',
  },
  partnersTitle: {
    fontSize: '22px',
    textTransform: 'uppercase',
    marginLeft: '10px',
  },
  partnersImage: {
    width: '100%',
    maxWidth: '333px',
  },
  partnersLogo: {
    width: '100%',
    maxWidth: '130px',
  },
  partnersLine: {
    width: '100%',
    height: '1px',
    margin: '30px auto 30px',
    borderTop: '1px solid white',
    opacity: '0.35',
  },
  partnersSteve: {
    width: '100px',
  },
  partnersName: {
    fontSize: '22px',
    lineHeight: '28px',
    [theme.breakpoints.up('sm')]: {
      fontSize: '32px',
    },
  },
  partnersRole: {
    fontSize: '14px',
    [theme.breakpoints.up('sm')]: {
      fontSize: '20px',
    },
  },
  partnersYt: {
    width: '48px',
    [theme.breakpoints.up('sm')]: {
      width: '72px',
    },
  },
  partnersDescription: {
    fontSize: '18px',
    fontWeight: '100',
    lineHeight: '24px',
    fontStyle: 'italic',
  },
  partnersSocialIcons: {
    width: '50px',
    display: 'block',
    cursor: 'pointer',
    opacity: '0.5',
    '&:hover': {
      opacity: '1',
    },
  },
}));

export default function More() {
  const classes = useStyles();

  return (
    <Grid
      container
      paddingY={4}
      justifyContent="center"
      textAlign="center"
      spacing={4}>
      <Grid item xs={12} sx={{ display: { xs: 'none', sm: 'block' } }}>
        <span className={classes.partnersLive}>live</span>
        <strong className={classes.partnersTitle}>Partners</strong>
      </Grid>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
        <Grid item xs={4} key={index} display={{ xs: 'none', sm: 'block' }}>
          <img className={classes.partnersImage} src={image.src} />
          <img className={classes.partnersLogo} src={logo.src} />
        </Grid>
      ))}
      <Grid item xs={12}>
        <Grid container justifyContent="center">
          <Grid item xs={12} md={9}>
            <div className={classes.partnersLine}></div>
          </Grid>
        </Grid>
      </Grid>
      <Grid item sm={3} md={2} display={{ xs: 'none', sm: 'block' }}>
        <img src={steveChen.src} className={classes.partnersSteve} />
      </Grid>
      <Grid item xs={12} sm={9} md={7} textAlign="left">
        <strong className={classes.partnersName}>Steve Chen,</strong>{' '}
        <strong className={classes.partnersRole}>Co-founder</strong>{' '}
        <img className={classes.partnersYt} src={yt.src} />
        <p className={classes.partnersDescription}>
          Theta’s innovation is set to disrupt today’s online video industry
          much in the same way that the YouTube platform did to traditional
          video back in 2005. One of our biggest challenges had been the high
          costs of delivering video to various parts of the world, and this
          problem is only getting bigger with HD, 4K and higher quality video
          streams,” said Steve Chen, Co-Founder of YouTube. “I’m excited to be
          part of the next evolution of the streaming space, helping Theta
          create a decentralized peer-to-peer network that can offer improved
          video delivery at lower costs.
        </p>
      </Grid>
      <Grid container justifyContent="center" paddingY={4} spacing={3}>
        {[discord, fb, twitter, medium, github].map((item, index) => (
          <Grid item key={index}>
            <img src={item.src} className={classes.partnersSocialIcons} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}
