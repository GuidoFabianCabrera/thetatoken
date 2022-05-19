import * as React from 'react';
import {
  Grid,
  Drawer,
  Button,
  Item,
  List,
  ListItem,
  ListItemText,
  Box,
} from '@mui/material';

import nav from '../public/images/nav.png';
import navCompact from '../public/images/nav-compact.png';
import closeNav from '../public/images/close-nav.png';

export default function TemporaryDrawer() {
  const [state, setState] = React.useState();

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState(open);
  };

  const list = () => (
    <Grid
      container
      style={{
        width: '100vw',
        textTransform: 'uppercase',
      }}
      p={3}>
      <Grid item xs={12}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <img src={nav.src} width="122px" />
          <img
            src={closeNav.src}
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
            width="20px"
            height="20px"
          />
        </Box>
      </Grid>
      <Grid item xs={12}>
        <List>
          {['Network', 'News', 'Team'].map((text, index) => (
            <ListItem button key={index}>
              <ListItemText primary={text} style={{ fontWeight: 'light' }} />
            </ListItem>
          ))}
        </List>
      </Grid>
      <Grid item xs={12}>
        <List>
          {['Partners', 'Docs', 'Wallet', 'Explorer'].map((text, index) => (
            <ListItem button key={index}>
              <ListItemText primary={text} style={{ fontWeight: 'light' }} />
            </ListItem>
          ))}
        </List>
      </Grid>
    </Grid>
  );

  return (
    <div>
      <React.Fragment>
        <div>
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            <img src={nav.src} width="90px" style={{ display: 'block' }} />
          </Box>
          <Box
            sx={{ display: { xs: 'block', md: 'none' } }}
            onClick={toggleDrawer(true)}>
            <img
              src={navCompact.src}
              width="16px"
              style={{ display: 'block' }}
            />
          </Box>
        </div>
        <Drawer anchor={'left'} open={state} onClose={toggleDrawer(false)}>
          {list('left')}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
