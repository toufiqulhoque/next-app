import { AppBar, Toolbar, Typography } from '@mui/material';
import { Container } from '@mui/system';
import Head from 'next/head';
import React from 'react';
import useStyles from '../utils/styles';
const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    <div>
      <Head>
        <title>Next Amazone</title>
      </Head>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <Typography>amazone</Typography>
        </Toolbar>
      </AppBar>
      <Container className={classes.main}>{children}</Container>
      <footer>
        <Typography className={classes.footer}>
          All right reserved Amazone.
        </Typography>
      </footer>
    </div>
  );
};

export default Layout;
