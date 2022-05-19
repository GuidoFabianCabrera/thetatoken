import React from 'react';

import { makeStyles } from '@mui/styles';
import dotStrip from '../public/images/dot_strip.png';

const useStyles = makeStyles((theme) => ({
  foo: (props) => ({}),
  title: (props) => ({
    textTransform: 'uppercase',
    fontSize: '40px',
    position: 'relative',
    display: 'block',
    [theme.breakpoints.up('md')]: {
      fontSize: '50px',
    },
    '&::after': {
      // content: '"Live Network Stats"',
      content: `'${props.title}'`,
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
  }),
}));

export default function Title({ title }) {
  const props = {
    title: title,
  };

  const classes = useStyles(props);

  return <strong className={classes.title}>{title}</strong>;
}
